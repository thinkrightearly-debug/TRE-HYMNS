
import { useState, useRef, useEffect } from 'react';
import { generateHymnMelody } from '../services/gemini';
import { Hymn, Note } from '../types';
import { get, set, del } from 'idb-keyval';

export const FAMOUS_TUNES: Record<string, Note[]> = {
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
    { pitch: 392.00, duration: 1.2, name: "G4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 440.00, duration: 0.6, name: "A4" },
    { pitch: 493.88, duration: 0.6, name: "B4" },
    { pitch: 440.00, duration: 0.6, name: "A4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 349.23, duration: 0.6, name: "F4" },
    { pitch: 261.63, duration: 1.2, name: "C4" }
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
    { pitch: 261.63, duration: 1.2, name: "C4" },
    { pitch: 261.63, duration: 0.6, name: "C4" },
    { pitch: 349.23, duration: 1.2, name: "F4" },
    { pitch: 440.00, duration: 0.3, name: "A4" },
    { pitch: 349.23, duration: 0.3, name: "F4" },
    { pitch: 440.00, duration: 1.2, name: "A4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 523.25, duration: 1.8, name: "C5" }
  ],
  "EVENTIDE": [
    { pitch: 349.23, duration: 0.8, name: "F4" },
    { pitch: 349.23, duration: 0.8, name: "F4" },
    { pitch: 329.63, duration: 0.8, name: "E4" },
    { pitch: 293.66, duration: 0.8, name: "D4" },
    { pitch: 392.00, duration: 0.8, name: "G4" },
    { pitch: 349.23, duration: 1.6, name: "F4" },
    { pitch: 261.63, duration: 1.6, name: "C4" },
    { pitch: 349.23, duration: 0.8, name: "F4" },
    { pitch: 392.00, duration: 0.8, name: "G4" },
    { pitch: 440.00, duration: 0.8, name: "A4" },
    { pitch: 349.23, duration: 0.8, name: "F4" },
    { pitch: 293.66, duration: 1.6, name: "D4" },
    { pitch: 349.23, duration: 1.6, name: "F4" }
  ],
  "HYFRYDOL": [
    { pitch: 261.63, duration: 0.6, name: "C4" },
    { pitch: 293.66, duration: 0.6, name: "D4" },
    { pitch: 329.63, duration: 0.6, name: "E4" },
    { pitch: 349.23, duration: 0.6, name: "F4" },
    { pitch: 329.63, duration: 0.6, name: "E4" },
    { pitch: 293.66, duration: 0.6, name: "D4" },
    { pitch: 261.63, duration: 1.2, name: "C4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 440.00, duration: 0.6, name: "A4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 349.23, duration: 0.6, name: "F4" },
    { pitch: 329.63, duration: 0.6, name: "E4" },
    { pitch: 293.66, duration: 1.2, name: "D4" }
  ],
  "CWM RHONDDA": [
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 293.66, duration: 0.6, name: "D4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 493.88, duration: 0.6, name: "B4" },
    { pitch: 440.00, duration: 1.2, name: "A4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 440.00, duration: 0.6, name: "A4" },
    { pitch: 493.88, duration: 0.6, name: "B4" },
    { pitch: 523.25, duration: 0.6, name: "C5" },
    { pitch: 493.88, duration: 0.6, name: "B4" },
    { pitch: 440.00, duration: 0.6, name: "A4" },
    { pitch: 392.00, duration: 1.2, name: "G4" }
  ],
  "OLD HUNDREDTH": [
    { pitch: 392.00, duration: 0.8, name: "G4" },
    { pitch: 392.00, duration: 0.8, name: "G4" },
    { pitch: 369.99, duration: 0.8, name: "F#4" },
    { pitch: 329.63, duration: 0.8, name: "E4" },
    { pitch: 293.66, duration: 0.8, name: "D4" },
    { pitch: 392.00, duration: 0.8, name: "G4" },
    { pitch: 440.00, duration: 0.8, name: "A4" },
    { pitch: 493.88, duration: 1.6, name: "B4" },
    { pitch: 493.88, duration: 0.8, name: "B4" },
    { pitch: 493.88, duration: 0.8, name: "B4" },
    { pitch: 440.00, duration: 0.8, name: "A4" },
    { pitch: 392.00, duration: 0.8, name: "G4" },
    { pitch: 349.23, duration: 0.8, name: "F4" },
    { pitch: 392.00, duration: 0.8, name: "G4" },
    { pitch: 440.00, duration: 0.8, name: "A4" },
    { pitch: 293.66, duration: 1.6, name: "D4" }
  ],
  "OLD RUGGED CROSS": [
    { pitch: 293.66, duration: 0.6, name: "D4" },
    { pitch: 349.23, duration: 0.6, name: "F4" },
    { pitch: 440.00, duration: 0.6, name: "A4" },
    { pitch: 440.00, duration: 0.6, name: "A4" },
    { pitch: 440.00, duration: 0.6, name: "A4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 349.23, duration: 1.2, name: "F4" },
    { pitch: 392.00, duration: 0.6, name: "G4" },
    { pitch: 440.00, duration: 0.6, name: "A4" },
    { pitch: 466.16, duration: 0.6, name: "Bb4" },
    { pitch: 466.16, duration: 0.6, name: "Bb4" },
    { pitch: 440.00, duration: 0.6, name: "A4" },
    { pitch: 392.00, duration: 1.2, name: "G4" }
  ],
  "VILLE DU HAVRE": [
    { pitch: 329.63, duration: 0.8, name: "E4" },
    { pitch: 329.63, duration: 0.8, name: "E4" },
    { pitch: 293.66, duration: 0.8, name: "D4" },
    { pitch: 261.63, duration: 1.6, name: "C4" },
    { pitch: 392.00, duration: 0.8, name: "G4" },
    { pitch: 392.00, duration: 0.8, name: "G4" },
    { pitch: 349.23, duration: 0.8, name: "F4" },
    { pitch: 329.63, duration: 1.6, name: "E4" },
    { pitch: 440.00, duration: 0.8, name: "A4" },
    { pitch: 440.00, duration: 0.8, name: "A4" },
    { pitch: 523.25, duration: 0.8, name: "C5" },
    { pitch: 440.00, duration: 0.8, name: "A4" },
    { pitch: 392.00, duration: 2.4, name: "G4" }
  ]
};

export const useOrganPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [currentNoteName, setCurrentNoteName] = useState<string>("");
  const [playingHymnId, setPlayingHymnId] = useState<number | null>(null);
  const [volume, setVolume] = useState(0.5);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const activeNodesRef = useRef<(OscillatorNode | GainNode | DelayNode)[]>([]);
  const timeoutsRef = useRef<number[]>([]);
  const melodyCacheRef = useRef<Record<number, Note[]>>({});

  useEffect(() => {
    if (gainNodeRef.current && audioContextRef.current) {
      gainNodeRef.current.gain.setTargetAtTime(volume, audioContextRef.current.currentTime, 0.1);
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const createOrganTone = (ctx: AudioContext, freq: number, start: number, duration: number) => {
    const masterGain = ctx.createGain();
    const reverbGain = ctx.createGain();
    const delay = ctx.createDelay();
    
    // Connect to the global gain node instead of destination
    if (gainNodeRef.current) {
      masterGain.connect(gainNodeRef.current);
    } else {
      masterGain.connect(ctx.destination);
    }
    
    delay.delayTime.setValueAtTime(0.06, start);
    reverbGain.gain.setValueAtTime(0.2, start);
    
    masterGain.connect(delay);
    delay.connect(reverbGain);
    
    if (gainNodeRef.current) {
      reverbGain.connect(gainNodeRef.current);
    } else {
      reverbGain.connect(ctx.destination);
    }

    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, start);
    
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq + 0.5, start);

    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    osc3.type = 'square';
    osc3.frequency.setValueAtTime(freq * 2, start);

    // Pipe 4 (Mixture/Shimmer - 3rd harmonic)
    const osc4 = ctx.createOscillator();
    const gain4 = ctx.createGain();
    osc4.type = 'sine';
    osc4.frequency.setValueAtTime(freq * 3, start);

    const vibrato = ctx.createOscillator();
    const vibratoGain = ctx.createGain();
    vibrato.frequency.setValueAtTime(5, start);
    vibratoGain.gain.setValueAtTime(2, start);
    vibrato.connect(vibratoGain);
    vibratoGain.connect(osc1.frequency);
    vibratoGain.connect(osc2.frequency);
    vibratoGain.connect(osc3.frequency);
    vibratoGain.connect(osc4.frequency);

    const attack = 0.12;
    const release = 0.25;
    
    gain1.gain.setValueAtTime(0, start);
    gain1.gain.linearRampToValueAtTime(0.18, start + attack);
    gain1.gain.setValueAtTime(0.18, start + duration - release);
    gain1.gain.linearRampToValueAtTime(0, start + duration);

    gain2.gain.setValueAtTime(0, start);
    gain2.gain.linearRampToValueAtTime(0.12, start + attack);
    gain2.gain.setValueAtTime(0.12, start + duration - release);
    gain2.gain.linearRampToValueAtTime(0, start + duration);

    gain3.gain.setValueAtTime(0, start);
    gain3.gain.linearRampToValueAtTime(0.04, start + attack);
    gain3.gain.setValueAtTime(0.04, start + duration - release);
    gain3.gain.linearRampToValueAtTime(0, start + duration);

    gain4.gain.setValueAtTime(0, start);
    gain4.gain.linearRampToValueAtTime(0.02, start + attack);
    gain4.gain.setValueAtTime(0.02, start + duration - release);
    gain4.gain.linearRampToValueAtTime(0, start + duration);

    osc1.connect(gain1);
    gain1.connect(masterGain);
    osc2.connect(gain2);
    gain2.connect(masterGain);
    osc3.connect(gain3);
    gain3.connect(masterGain);
    osc4.connect(gain4);
    gain4.connect(masterGain);

    osc1.start(start);
    osc2.start(start);
    osc3.start(start);
    osc4.start(start);
    vibrato.start(start);
    
    osc1.stop(start + duration);
    osc2.stop(start + duration);
    osc3.stop(start + duration);
    osc4.stop(start + duration);
    vibrato.stop(start + duration);

    activeNodesRef.current.push(osc1, osc2, osc3, osc4, vibrato, gain1, gain2, gain3, gain4, vibratoGain, masterGain, delay, reverbGain);
  };

  const playHymn = async (hymn: Hymn) => {
    if (isPlaying && playingHymnId === hymn.id) {
      stopAudio();
      return;
    }

    if (isPlaying) {
      stopAudio();
    }

    const customKey = `custom_melody_${hymn.id}`;
    let melody = await get(customKey);

    if (!melody) {
      melody = hymn.melody || melodyCacheRef.current[hymn.id];
      
      if (!melody && hymn.tune) {
        const tuneKey = hymn.tune.toUpperCase().trim();
        if (FAMOUS_TUNES[tuneKey]) {
          melody = FAMOUS_TUNES[tuneKey];
        }
      }
      
      if (!melody) {
        setIsLoadingAudio(true);
        setPlayingHymnId(hymn.id);
        melody = await generateHymnMelody(hymn.title, hymn.tune || 'Traditional', hymn.verses[0]);
        setIsLoadingAudio(false);
        if (melody && melody.length > 0) {
          melodyCacheRef.current[hymn.id] = melody;
        }
      }
    }

    if (!melody || melody.length === 0) {
      setPlayingHymnId(null);
      return;
    }

    try {
      if (!audioContextRef.current) {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioContextRef.current = ctx;
        
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(volume, ctx.currentTime);
        gainNodeRef.current = gainNode;
        
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        analyserRef.current = analyser;
        
        gainNode.connect(analyser);
        analyser.connect(ctx.destination);
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') await ctx.resume();

      setIsPlaying(true);
      setPlayingHymnId(hymn.id);
      let nextStartTime = ctx.currentTime + 0.1;

      melody.forEach((note, index) => {
        const playTime = nextStartTime;
        createOrganTone(ctx, note.pitch, playTime, note.duration);
        
        const timeout = window.setTimeout(() => {
          setCurrentNoteName(note.name);
          if (index === melody.length - 1) {
            window.setTimeout(() => {
              setIsPlaying(false);
              setPlayingHymnId(null);
            }, note.duration * 1000);
          }
        }, (playTime - ctx.currentTime) * 1000);
        
        timeoutsRef.current.push(timeout);
        nextStartTime += note.duration;
      });

    } catch (err) {
      console.error("Organ Synthesis failed:", err);
      setIsPlaying(false);
      setPlayingHymnId(null);
    }
  };

  const stopAudio = () => {
    activeNodesRef.current.forEach(node => {
      try { 
        if ('stop' in node) node.stop();
        node.disconnect();
      } catch (e) {}
    });
    activeNodesRef.current = [];
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setIsPlaying(false);
    setPlayingHymnId(null);
    setCurrentNoteName("");
  };

  const saveCustomMelody = async (hymnId: number, notes: Note[]) => {
    await set(`custom_melody_${hymnId}`, notes);
    melodyCacheRef.current[hymnId] = notes;
  };

  const deleteCustomMelody = async (hymnId: number) => {
    await del(`custom_melody_${hymnId}`);
    delete melodyCacheRef.current[hymnId];
  };

  const getCustomMelody = async (hymnId: number): Promise<Note[] | null> => {
    return await get(`custom_melody_${hymnId}`) as Note[] | null;
  };

  return {
    isPlaying,
    isLoadingAudio,
    currentNoteName,
    playingHymnId,
    volume,
    setVolume,
    analyser: analyserRef.current,
    playHymn,
    stopAudio,
    saveCustomMelody,
    deleteCustomMelody,
    getCustomMelody
  };
};
