
import React from 'react';
import { Hymn } from '../types';
import { Heart, ChevronRight, Play, Square, Loader2 } from 'lucide-react';

interface HymnListProps {
  hymns: Hymn[];
  onSelect: (hymn: Hymn) => void;
  favorites: number[];
  onToggleFavorite: (id: number) => void;
  organPlayer: {
    isPlaying: boolean;
    isLoadingAudio: boolean;
    playingHymnId: number | null;
    playHymn: (hymn: Hymn) => void;
    stopAudio: () => void;
  };
}

export const HymnList: React.FC<HymnListProps> = ({ hymns, onSelect, favorites, onToggleFavorite, organPlayer }) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      {hymns.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No hymns found matching your search.
        </div>
      ) : (
        hymns.map((hymn) => (
          <div 
            key={hymn.id}
            onClick={() => onSelect(hymn)}
            className={`group flex items-center justify-between p-4 rounded-xl shadow-sm border transition-all cursor-pointer ${
              favorites.includes(hymn.id) 
                ? 'bg-red-50/30 border-red-100 hover:border-red-200 hover:shadow-md' 
                : 'bg-white border-gray-100 hover:border-indigo-200 hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className={`w-12 h-12 flex items-center justify-center font-bold rounded-full text-lg transition-colors shrink-0 ${
                favorites.includes(hymn.id) ? 'bg-red-100 text-red-700' : 'bg-indigo-50 text-indigo-700'
              }`}>
                {hymn.number}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors truncate">
                  {hymn.title}
                </h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium truncate">
                  {hymn.category}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  organPlayer.playHymn(hymn);
                }}
                className={`p-2 rounded-full transition-all ${
                  organPlayer.playingHymnId === hymn.id 
                    ? 'text-indigo-600 bg-indigo-50' 
                    : 'text-gray-300 hover:bg-gray-100 hover:text-indigo-500'
                }`}
              >
                {organPlayer.isLoadingAudio && organPlayer.playingHymnId === hymn.id ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : organPlayer.isPlaying && organPlayer.playingHymnId === hymn.id ? (
                  <Square size={18} fill="currentColor" />
                ) : (
                  <Play size={18} fill="currentColor" />
                )}
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(hymn.id);
                }}
                className={`p-2 rounded-full transition-colors ${favorites.includes(hymn.id) ? 'text-red-500 bg-red-50' : 'text-gray-300 hover:bg-gray-100'}`}
              >
                <Heart size={18} fill={favorites.includes(hymn.id) ? "currentColor" : "none"} />
              </button>
              <ChevronRight className="text-gray-300 group-hover:text-indigo-400 transition-colors hidden sm:block" size={20} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};
