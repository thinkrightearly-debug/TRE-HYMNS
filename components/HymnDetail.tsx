
import React, { useState, useRef, useEffect } from 'react';
import { Hymn, Note } from '../types';
import { ArrowLeft, Heart, Sparkles, BookOpen, Music, Share2, Play, Square, Loader2, Volume2, Mic2 } from 'lucide-react';
import { getHymnReflection, modernizeHymn, generateHymnMelody, getCachedData } from '../services/gemini';
import { ReactiveVisualizer } from './ReactiveVisualizer';

interface HymnDetailProps {
  hymn: Hymn;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onBack: () => void;
  organPlayer: {
    isPlaying: boolean;
    isLoadingAudio: boolean;
    currentNoteName: string;
    playingHymnId: number | null;
    volume: number;
    setVolume: (v: number) => void;
    analyser: AnalyserNode | null;
    playHymn: (hymn: Hymn) => void;
    stopAudio: () => void;
  };
}

export const HymnDetail: React.FC<HymnDetailProps> = ({ hymn, isFavorite, onToggleFavorite, onBack, organPlayer }) => {
  const [reflection, setReflection] = useState<string | null>(null);
  const [loadingReflection, setLoadingReflection] = useState(false);
  const [modernLyrics, setModernLyrics] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'traditional' | 'modern'>('traditional');

  useEffect(() => {
    const checkCache = async () => {
      const cachedReflection = await getCachedData(`reflection_${hymn.title}`);
      if (cachedReflection) setReflection(cachedReflection);

      const cachedModern = await getCachedData(`modern_${hymn.title}`);
      if (cachedModern) setModernLyrics(cachedModern);
    };
    checkCache();
  }, [hymn.title]);
  
  const handleGetReflection = async () => {
    if (reflection) return;
    setLoadingReflection(true);
    const res = await getHymnReflection(hymn.title, hymn.verses.join("\n"));
    setReflection(res);
    setLoadingReflection(false);
  };

  const handleModernize = async () => {
    if (viewMode === 'modern') { setViewMode('traditional'); return; }
    if (modernLyrics) { setViewMode('modern'); return; }
    setLoadingReflection(true);
    const res = await modernizeHymn(hymn.title, hymn.verses.join("\n"));
    setModernLyrics(res);
    setViewMode('modern');
    setLoadingReflection(false);
  };

  const handleShare = async (type: 'lyrics' | 'reflection') => {
    const title = `Sacred Hymnal - ${hymn.title}`;
    let text = '';
    
    if (type === 'lyrics') {
      text = `Hymn ${hymn.number}: ${hymn.title}\n\n${hymn.verses.join('\n\n')}${hymn.chorus ? `\n\nChorus:\n${hymn.chorus}` : ''}`;
    } else {
      text = `Spiritual Reflection on "${hymn.title}":\n\n${reflection}\n\nShared from Sacred Hymnal`;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: window.location.href
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard and alert
      try {
        await navigator.clipboard.writeText(text);
        alert('Content copied to clipboard! You can now paste it in your email or social media.');
      } catch (err) {
        // Ultimate fallback: mailto
        const mailtoLink = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text)}`;
        window.location.href = mailtoLink;
      }
    }
  };

  const isCurrentHymnPlaying = organPlayer.playingHymnId === hymn.id;

  return (
    <div className="flex flex-col h-full bg-white animate-in slide-in-from-right duration-300 relative">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-gray-100 flex items-center justify-between p-4">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-2xl transition-all">
          <ArrowLeft size={24} className="text-gray-700" />
        </button>
        <div className="text-center flex-1">
          <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">Hymn {hymn.number}</span>
          <h2 className="font-bold text-gray-900 truncate px-4 text-lg">{hymn.title}</h2>
        </div>
        <div className="flex gap-1">
          <button onClick={() => onToggleFavorite(hymn.id)} className={`p-2 rounded-2xl ${isFavorite ? 'text-red-500 bg-red-50' : 'text-gray-400'}`}>
            <Heart size={22} fill={isFavorite ? "currentColor" : "none"} />
          </button>
          <button onClick={() => handleShare('lyrics')} className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
            <Share2 size={22} />
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-48">
        {/* ORGAN TUNE CARD */}
        <div className="bg-gradient-to-br from-indigo-950 to-indigo-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
           <div className="absolute -right-16 -bottom-16 opacity-10 pointer-events-none">
             <Music size={300} />
           </div>
           
           <div className="relative z-10 space-y-8">
             <div className="flex justify-between items-start">
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-1 flex items-center gap-2">
                   <Music size={12} /> Sacred Organ Tune (Accurate)
                 </p>
                 <h4 className="text-3xl font-black italic tracking-tighter">{hymn.tune || 'Traditional'}</h4>
               </div>
               {isCurrentHymnPlaying && organPlayer.isPlaying && (
                 <div className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/20 animate-pulse">
                    <span className="text-xs font-black tracking-widest">{organPlayer.currentNoteName || '--'}</span>
                 </div>
               )}
             </div>

             <div className="flex flex-col gap-6">
                {/* Reactive Visualizer */}
                <div className="h-16 flex items-end justify-center">
                  {isCurrentHymnPlaying && organPlayer.isPlaying ? (
                    <ReactiveVisualizer analyser={organPlayer.analyser} isPlaying={organPlayer.isPlaying} />
                  ) : (
                    <div className="flex justify-between gap-1 w-full h-full items-end opacity-20">
                      {[...Array(16)].map((_, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-white/50 rounded-t-full"
                          style={{ height: `${30 + (i % 5) * 15}%` }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Volume Control */}
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <Volume2 size={18} className="text-indigo-300 shrink-0" />
                  <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01" 
                    value={organPlayer.volume}
                    onChange={(e) => organPlayer.setVolume(parseFloat(e.target.value))}
                    className="flex-1 h-1 bg-indigo-900/50 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                  />
                </div>

               <button 
                 onClick={() => organPlayer.playHymn(hymn)}
                 disabled={organPlayer.isLoadingAudio && isCurrentHymnPlaying}
                 className={`w-full flex items-center justify-center gap-3 py-5 rounded-3xl text-sm font-black transition-all shadow-xl active:scale-95 border ${isCurrentHymnPlaying && organPlayer.isPlaying ? 'bg-white text-indigo-950 border-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-500'}`}
               >
                 {organPlayer.isLoadingAudio && isCurrentHymnPlaying ? <Loader2 className="animate-spin" size={20} /> : isCurrentHymnPlaying && organPlayer.isPlaying ? <Square size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                 {organPlayer.isLoadingAudio && isCurrentHymnPlaying ? 'PREPARING ORGAN...' : isCurrentHymnPlaying && organPlayer.isPlaying ? 'STOP ORGAN' : 'PLAY ORGAN TUNE'}
               </button>
             </div>
           </div>
        </div>

        {/* Action Bar */}
        <div className="grid grid-cols-2 gap-4">
          <button onClick={handleGetReflection} className="flex items-center justify-center gap-2 py-5 bg-gray-50 border border-gray-100 rounded-[2rem] text-sm font-black text-gray-700 hover:bg-white transition-all">
            <Sparkles size={18} className="text-indigo-500" /> Reflection
          </button>
          <button onClick={handleModernize} className={`flex items-center justify-center gap-2 py-5 border rounded-[2rem] text-sm font-black transition-all ${viewMode === 'modern' ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-gray-50 border-gray-100 text-gray-700'}`}>
            <BookOpen size={18} className="text-amber-500" /> {viewMode === 'modern' ? 'Traditional' : 'Modern'}
          </button>
        </div>

        {/* Reflection */}
        {reflection && (
          <div className="bg-white p-8 rounded-[2.5rem] border border-indigo-50 shadow-xl animate-in zoom-in-95 duration-500 relative group/reflection">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-indigo-600 font-black flex items-center gap-2 text-[10px] uppercase tracking-widest"><Sparkles size={14} /> Divine Insight</h4>
              <button 
                onClick={() => handleShare('reflection')}
                className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                title="Share Reflection"
              >
                <Share2 size={16} />
              </button>
            </div>
            <p className="text-gray-900 leading-[1.8] italic text-xl font-medium hymn-font">"{reflection}"</p>
          </div>
        )}

        {/* Lyrics */}
        <div className="space-y-16">
          {viewMode === 'traditional' ? (
            hymn.verses.map((verse, index) => (
              <div key={index} className="space-y-6">
                <div className="flex gap-10">
                  <span className="text-indigo-100 font-black text-7xl leading-none">{index + 1}</span>
                  <div className="flex-1 pt-3">
                    <p className="hymn-font text-2xl leading-[1.8] text-gray-950 whitespace-pre-line font-medium">{verse}</p>
                  </div>
                </div>
                {index === 0 && hymn.chorus && (
                  <div className="ml-20 bg-gray-50 p-10 rounded-[3rem] border-l-8 border-indigo-900 shadow-inner">
                    <span className="text-[10px] font-black text-indigo-900/40 uppercase tracking-widest block mb-4">Chorus</span>
                    <p className="hymn-font text-2xl font-bold leading-relaxed text-indigo-950 whitespace-pre-line">{hymn.chorus}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-amber-50/40 p-12 rounded-[3.5rem] border-2 border-amber-100 shadow-inner">
              <h3 className="font-black text-amber-900 mb-8 flex items-center gap-3 text-2xl"><BookOpen size={32} className="text-amber-600" /> Contemporary Version</h3>
              <p className="hymn-font text-2xl leading-[1.9] text-amber-950 whitespace-pre-line font-medium italic">{modernLyrics}</p>
            </div>
          )}
        </div>
      </div>

      {/* Floating Status */}
      { (organPlayer.isPlaying || organPlayer.isLoadingAudio) && isCurrentHymnPlaying && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg animate-in slide-in-from-bottom-12 duration-700">
          <div className="bg-black/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl flex items-center gap-6 text-white">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 overflow-hidden relative">
               {organPlayer.isLoadingAudio ? <Loader2 className="animate-spin text-indigo-400" size={32} /> : (
                 <div className="absolute inset-0 flex items-center justify-center">
                    <ReactiveVisualizer 
                      analyser={organPlayer.analyser} 
                      isPlaying={organPlayer.isPlaying} 
                      width={64} 
                      height={64} 
                    />
                 </div>
               )}
            </div>
            <div className="flex-1">
               <div className="flex items-center gap-2 mb-1">
                 <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                 <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Instrumental Only</p>
               </div>
               <h5 className="font-bold truncate text-lg tracking-tight">{hymn.title}</h5>
            </div>
            <button onClick={organPlayer.stopAudio} className="w-14 h-14 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center border border-red-500/20"><Square size={24} fill="currentColor" /></button>
          </div>
        </div>
      )}
    </div>
  );
};
