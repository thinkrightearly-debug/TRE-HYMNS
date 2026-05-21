import React, { useState, useEffect } from 'react';
import { Hymn, Note } from '../types';
import { Music, Sliders, Play, RotateCcw, Save, Trash, Volume2, Sparkles, Check, HelpCircle } from 'lucide-react';
import { generateHymnMelody } from '../services/gemini';

export const NOTE_PITCHES: Record<string, number> = {
  "G3": 196.00, "G#3": 207.65, "A3": 220.00, "A#3": 233.08, "B3": 246.94,
  "C4": 261.63, "C#4": 277.18, "D4": 293.66, "D#4": 311.13, "E4": 329.63,
  "F4": 349.23, "F#4": 369.99, "G4": 392.00, "G#4": 415.30, "A4": 440.00,
  "A#4": 466.16, "B4": 493.88, "C5": 523.25, "C#5": 554.37, "D5": 587.33,
  "D#5": 622.25, "E5": 659.25, "F5": 698.46, "F#5": 739.99, "G5": 783.99,
  "G#5": 830.61, "A5": 880.00, "A#5": 932.33, "B5": 987.77, "C6": 1046.50
};

export const PRESET_TUNES: Record<string, Note[]> = {
  "NICAEA": [
    { pitch: 261.63, duration: 0.6, name: "C4" },
    { pitch: 261.63, duration: 0.6, name: "C4" },
    { pitch: 329.63, duration: 0.6, name: "E4" },
    { pitch: 329.63, duration: 0.6, name: "E4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 392.00, duration: 1.2, name: "G4" },
    { pitch: 440.00, duration: 0.6, name: "A4" },
    { pitch: 493.88, duration: 0.6, name: "B4" },
    { pitch: 523.25, duration: 0.6, name: "C5" },
    { pitch: 523.25, duration: 0.6, name: "C5" },
    { pitch: 493.88, duration: 0.6, name: "B4" },
    { pitch: 392.00, duration: 1.2, name: "G4" }
  ],
  "NEW BRITAIN": [
    { pitch: 261.63, duration: 0.6, name: "C4" },
    { pitch: 349.23, duration: 1.2, name: "F4" },
    { pitch: 440.00, duration: 0.3, name: "A4" },
    { pitch: 349.23, duration: 0.3, name: "F4" },
    { pitch: 440.00, duration: 1.2, name: "A4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 349.23, duration: 1.2, name: "F4" },
    { pitch: 293.66, duration: 0.6, name: "D4" },
    { pitch: 261.63, duration: 1.2, name: "C4" }
  ],
  "EVENTIDE": [
    { pitch: 349.23, duration: 0.8, name: "F4" },
    { pitch: 349.23, duration: 0.8, name: "F4" },
    { pitch: 329.63, duration: 0.8, name: "E4" },
    { pitch: 293.66, duration: 0.8, name: "D4" },
    { pitch: 392.00, duration: 0.8, name: "G4" },
    { pitch: 349.23, duration: 1.6, name: "F4" },
    { pitch: 261.63, duration: 1.6, name: "C4" }
  ],
  "HYFRYDOL": [
    { pitch: 261.63, duration: 0.6, name: "C4" },
    { pitch: 293.66, duration: 0.6, name: "D4" },
    { pitch: 329.63, duration: 0.6, name: "E4" },
    { pitch: 349.23, duration: 0.6, name: "F4" },
    { pitch: 329.63, duration: 0.6, name: "E4" },
    { pitch: 293.66, duration: 0.6, name: "D4" },
    { pitch: 261.63, duration: 1.2, name: "C4" }
  ],
  "CWM RHONDDA": [
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 293.66, duration: 0.6, name: "D4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 493.88, duration: 0.6, name: "B4" },
    { pitch: 440.00, duration: 1.2, name: "A4" }
  ],
  "OLD HUNDREDTH": [
    { pitch: 392.00, duration: 0.8, name: "G4" },
    { pitch: 392.00, duration: 0.8, name: "G4" },
    { pitch: 369.99, duration: 0.8, name: "F#4" },
    { pitch: 329.63, duration: 0.8, name: "E4" },
    { pitch: 293.66, duration: 0.8, name: "D4" },
    { pitch: 392.00, duration: 0.8, name: "G4" }
  ]
};

interface TuneCustomizerProps {
  hymn: Hymn;
  organPlayer: {
    saveCustomMelody: (hymnId: number, notes: Note[]) => Promise<void>;
    deleteCustomMelody: (hymnId: number) => Promise<void>;
    getCustomMelody: (hymnId: number) => Promise<Note[] | null>;
  };
}

export const TuneCustomizer: React.FC<TuneCustomizerProps> = ({ hymn, organPlayer }) => {
  const [activeNotes, setActiveNotes] = useState<Note[]>([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [loadingAI, setLoadingAI] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const loadMelody = async () => {
      const custom = await organPlayer.getCustomMelody(hymn.id);
      if (custom) {
        setActiveNotes(custom);
      } else if (hymn.melody) {
        setActiveNotes(hymn.melody);
      } else {
        const tuneKey = (hymn.tune || '').toUpperCase().trim();
        if (PRESET_TUNES[tuneKey]) {
          setActiveNotes(PRESET_TUNES[tuneKey]);
        } else {
          // Fallback simple notes
          setActiveNotes([
            { pitch: 261.63, duration: 0.8, name: "C4" },
            { pitch: 293.66, duration: 0.8, name: "D4" },
            { pitch: 329.63, duration: 0.8, name: "E4" },
            { pitch: 349.23, duration: 1.2, name: "F4" }
          ]);
        }
      }
    };
    loadMelody();
    setSelectedNoteIndex(null);
    setIsSaved(false);
  }, [hymn, organPlayer]);

  const playSinglePitch = (pitch: number, duration: number) => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, ctx.currentTime);
      
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelectNote = (index: number) => {
    setSelectedNoteIndex(index);
    const note = activeNotes[index];
    playSinglePitch(note.pitch, note.duration);
  };

  const handleUpdateNoteName = (name: string) => {
    if (selectedNoteIndex === null) return;
    const pitch = NOTE_PITCHES[name];
    if (!pitch) return;

    const updated = [...activeNotes];
    updated[selectedNoteIndex] = {
      ...updated[selectedNoteIndex],
      name,
      pitch
    };
    setActiveNotes(updated);
    setIsSaved(false);
    playSinglePitch(pitch, updated[selectedNoteIndex].duration);
  };

  const handleUpdateDuration = (duration: number) => {
    if (selectedNoteIndex === null) return;
    const updated = [...activeNotes];
    updated[selectedNoteIndex] = {
      ...updated[selectedNoteIndex],
      duration
    };
    setActiveNotes(updated);
    setIsSaved(false);
    playSinglePitch(updated[selectedNoteIndex].pitch, duration);
  };

  const handleApplyPreset = (presetName: string) => {
    const preset = PRESET_TUNES[presetName];
    if (preset) {
      setActiveNotes(preset);
      setSelectedNoteIndex(null);
      setIsSaved(false);
    }
  };

  const handleSave = async () => {
    await organPlayer.saveCustomMelody(hymn.id, activeNotes);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleReset = async () => {
    await organPlayer.deleteCustomMelody(hymn.id);
    if (hymn.melody) {
      setActiveNotes(hymn.melody);
    } else {
      const tuneKey = (hymn.tune || '').toUpperCase().trim();
      if (PRESET_TUNES[tuneKey]) {
        setActiveNotes(PRESET_TUNES[tuneKey]);
      } else {
        setActiveNotes([
          { pitch: 261.63, duration: 0.8, name: "C4" },
          { pitch: 293.66, duration: 0.8, name: "D4" },
          { pitch: 329.63, duration: 0.8, name: "E4" },
          { pitch: 349.23, duration: 1.2, name: "F4" }
        ]);
      }
    }
    setSelectedNoteIndex(null);
    setIsSaved(false);
  };

  const handleRegenerateWithAI = async () => {
    setLoadingAI(true);
    try {
      const notes = await generateHymnMelody(hymn.title, hymn.tune || 'Traditional', hymn.verses[0]);
      if (notes && notes.length > 0) {
        setActiveNotes(notes);
        setSelectedNoteIndex(null);
        setIsSaved(false);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingAI(false);
    }
  };

  const handleAddNote = () => {
    const lastNote = activeNotes[activeNotes.length - 1] || { pitch: 261.63, duration: 0.8, name: "C4" };
    setActiveNotes([...activeNotes, { ...lastNote }]);
    setSelectedNoteIndex(activeNotes.length);
    setIsSaved(false);
  };

  const handleRemoveNote = () => {
    if (selectedNoteIndex === null || activeNotes.length <= 1) return;
    const updated = activeNotes.filter((_, i) => i !== selectedNoteIndex);
    setActiveNotes(updated);
    setSelectedNoteIndex(null);
    setIsSaved(false);
  };

  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 p-6 space-y-6 shadow-xl animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
            <Sliders size={18} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Organ Harmony Tuner</h4>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Configure & Adjust Melodies</span>
          </div>
        </div>
        <div className="flex gap-1">
          <button 
            type="button" 
            onClick={() => setShowInfo(!showInfo)} 
            className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
            title="Help"
          >
            <HelpCircle size={20} />
          </button>
        </div>
      </div>

      {showInfo && (
        <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100 text-xs text-indigo-950 leading-relaxed animate-in slide-in-from-top-4 duration-300">
          <p className="font-bold mb-2 flex items-center gap-1.5"><Check size={14} /> Master Organ Calibration</p>
          Is the melody or rhythm of this hymn slightly inaccurate for your assembly? Use this tool to adjust note pitches and beat lengths. 
          <ul className="list-disc list-inside mt-2 space-y-1 pl-1">
            <li>Click any note bubble below to listen and edit its pitch.</li>
            <li>Select standard presets to instantaneously map famous melodies.</li>
            <li>Save your edits to persist them immediately onto your local device memory!</li>
          </ul>
        </div>
      )}

      {/* Preset Tune Shortcuts */}
      <div className="space-y-2">
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block px-1">Apply Classic Melodic Presets</span>
        <div className="flex flex-wrap gap-1.5">
          {Object.keys(PRESET_TUNES).map(name => (
            <button
              key={name}
              onClick={() => handleApplyPreset(name)}
              className="px-3 py-2 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-900 border border-gray-100 font-bold rounded-xl text-xs text-gray-600 transition-colors"
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Sequencer Board */}
      <div className="space-y-2">
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block px-1">Lyrical Notes (Piano Roll)</span>
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-4 max-h-[160px] overflow-y-auto flex flex-wrap gap-2 shadow-inner">
          {activeNotes.map((note, index) => (
            <button
              key={index}
              onClick={() => handleSelectNote(index)}
              className={`px-3 py-2 rounded-xl text-xs font-black transition-all flex flex-col items-center border ${selectedNoteIndex === index ? 'bg-indigo-900 text-white border-indigo-900 scale-105 shadow-md shadow-indigo-200' : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300'}`}
            >
              <span>{note.name}</span>
              <span className="text-[8px] opacity-60 font-bold">{note.duration}s</span>
            </button>
          ))}
          <button 
            onClick={handleAddNote}
            className="px-4 py-2 border-2 border-dashed border-gray-200 hover:border-indigo-300 hover:text-indigo-600 rounded-xl text-xs font-black text-gray-400 transition-colors flex items-center justify-center"
          >
            + Add Note
          </button>
        </div>
      </div>

      {/* Editing Panel */}
      {selectedNoteIndex !== null ? (
        <div className="bg-gray-50 border border-gray-200/60 rounded-3xl p-5 space-y-4 animate-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between border-b border-gray-200/40 pb-3">
            <span className="text-xs font-black text-indigo-950 uppercase tracking-wider">Configure Note #{selectedNoteIndex + 1}</span>
            <button 
              onClick={handleRemoveNote}
              disabled={activeNotes.length <= 1}
              className="text-xs text-red-600 font-bold hover:underline disabled:opacity-40"
            >
              Delete Note
            </button>
          </div>

          {/* Pitches list */}
          <div className="space-y-2">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Pitch Selection</span>
            <div className="grid grid-cols-6 gap-1 max-h-[110px] overflow-y-auto">
              {Object.keys(NOTE_PITCHES).map(name => (
                <button
                  key={name}
                  onClick={() => handleUpdateNoteName(name)}
                  className={`py-2 text-[10px] font-black rounded-lg border transition-colors ${activeNotes[selectedNoteIndex].name === name ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'}`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Time Duration slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-black text-gray-400 uppercase tracking-widest text-[10px]">Note Duration (Beat Length)</span>
              <span className="text-indigo-900 font-black">{activeNotes[selectedNoteIndex].duration} seconds</span>
            </div>
            <div className="flex gap-2">
              {[0.2, 0.4, 0.6, 0.8, 1.2, 1.6, 2.4].map(val => (
                <button
                  key={val}
                  onClick={() => handleUpdateDuration(val)}
                  className={`flex-1 py-2 text-[10px] font-black rounded-lg border transition-colors ${activeNotes[selectedNoteIndex].duration === val ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'}`}
                >
                  {val}s
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-5 border border-dashed border-gray-100 rounded-3xl text-xs text-gray-400 font-bold flex flex-col items-center justify-center gap-2">
          <Sliders size={20} className="text-gray-300" />
          <span>Click on a note in the roll to start tuning</span>
        </div>
      )}

      {/* Control Actions */}
      <div className="flex gap-2 pt-2 border-t border-gray-100">
        <button
          onClick={handleSave}
          className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${isSaved ? 'bg-green-600 text-white' : 'bg-indigo-900 hover:bg-indigo-800 text-white shadow-lg shadow-indigo-100'}`}
        >
          {isSaved ? <Check size={14} /> : <Save size={14} />}
          {isSaved ? 'Tuning Saved!' : 'Save Tune'}
        </button>
        
        <button
          onClick={handleReset}
          className="px-5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest transition-colors"
          title="Reset to Original"
        >
          <RotateCcw size={14} />
          Reset
        </button>

        <button
          onClick={handleRegenerateWithAI}
          disabled={loadingAI}
          className="px-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white disabled:opacity-50 rounded-2xl flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest transition-colors shadow-md shadow-amber-100"
          title="Regenerate with AI"
        >
          {loadingAI ? <RotateCcw className="animate-spin" size={14} /> : <Sparkles size={14} />}
          AI Tune
        </button>
      </div>
    </div>
  );
};
