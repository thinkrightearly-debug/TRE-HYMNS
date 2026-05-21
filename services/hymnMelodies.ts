import { Note } from '../types';

// Equal temperament note frequencies
export const PITCHES: Record<string, number> = {
  'C3': 130.81, 'C#3': 138.59, 'D3': 146.83, 'D#3': 155.56, 'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'G3': 196.00, 'G#3': 207.65, 'A3': 220.00, 'A#3': 233.08, 'B3': 246.94,
  'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63, 'F4': 349.23, 'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
  'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'E5': 659.25, 'F5': 698.46, 'F#5': 739.99, 'G5': 783.99, 'G#5': 830.61, 'A5': 880.00, 'A#5': 932.33, 'B5': 987.77,
};

const makeMelody = (notes: [string, number][]): Note[] => {
  return notes.map(([name, rDur]) => ({
    name,
    pitch: PITCHES[name] || 261.63,
    duration: rDur
  }));
};

// Accurate well-known traditional tunes
export const ACCURATE_TUNES: Record<string, Note[]> = {
  'NICAEA': makeMelody([
    ['D4', 0.6], ['D4', 0.6], ['F#4', 0.6], ['F#4', 0.6],
    ['A4', 1.2], ['A4', 1.2],
    ['B4', 0.6], ['B4', 0.6], ['A4', 1.2],
    ['F#4', 0.6], ['A4', 0.6], ['G4', 1.2], ['F#4', 1.2], ['E4', 2.4],
    ['D4', 0.6], ['D4', 0.6], ['F#4', 0.6], ['F#4', 0.6],
    ['A4', 1.2], ['A4', 1.2],
    ['B4', 0.6], ['B4', 0.6], ['A4', 1.2],
    ['D4', 0.6], ['D4', 0.6], ['E4', 0.6], ['C#4', 0.6], ['D4', 2.4]
  ]),
  'BEECHER': makeMelody([
    ['G4', 0.6], ['F#4', 0.6], ['G4', 0.6], ['A4', 0.6],
    ['B4', 1.2], ['B4', 1.2],
    ['A4', 0.6], ['G4', 0.6], ['A4', 0.6], ['B4', 0.6],
    ['G4', 2.4],
    ['D5', 0.6], ['C5', 0.6], ['B4', 0.6], ['A4', 0.6],
    ['G4', 1.2], ['B4', 1.2],
    ['A4', 0.6], ['G4', 0.6], ['F#4', 0.6], ['G4', 0.6],
    ['A4', 2.4],
    ['G4', 0.6], ['F#4', 0.6], ['G4', 0.6], ['A4', 0.6],
    ['B4', 1.2], ['B4', 1.2]
  ]),
  'CWM RHONDDA': makeMelody([
    ['D4', 0.8], ['F#4', 0.8], ['D4', 0.8], ['A4', 0.8],
    ['D5', 1.2], ['C#5', 0.4], ['D5', 0.8], ['A4', 0.8],
    ['B4', 0.8], ['G4', 0.8], ['A4', 0.8], ['F#4', 0.8],
    ['E4', 1.6], ['D4', 1.6],
    ['F#4', 0.8], ['A4', 0.8], ['A4', 0.8], ['F#4', 0.8],
    ['A4', 1.2], ['G4', 0.4], ['F#4', 0.8], ['E4', 0.8],
    ['A4', 0.8], ['F#4', 0.8], ['G4', 0.8], ['C#4', 0.8],
    ['E4', 1.6], ['D4', 1.6]
  ]),
  'EVENTIDE': makeMelody([
    ['G4', 1.2], ['G4', 0.6], ['F#4', 0.6], ['E4', 1.2], ['D4', 1.2],
    ['G4', 1.2], ['A4', 0.6], ['B4', 0.6], ['G4', 2.4],
    ['B4', 1.2], ['B4', 0.6], ['A4', 0.6], ['G4', 1.2], ['F#4', 1.2],
    ['E4', 1.2], ['F#4', 0.6], ['G4', 0.6], ['A4', 2.4],
    ['G4', 1.2], ['G4', 0.6], ['F#4', 0.6], ['E4', 1.2], ['D4', 1.2],
    ['G4', 1.2], ['A4', 0.6], ['B4', 0.6], ['G4', 2.4]
  ]),
  'OLD HUNDREDTH': makeMelody([
    ['G4', 1.0], ['G4', 1.0], ['F#4', 1.0], ['E4', 1.0], ['D4', 1.0], ['G4', 1.0], ['A4', 1.0], ['B4', 2.0],
    ['B4', 1.0], ['B4', 1.0], ['B4', 1.0], ['A4', 1.0], ['G4', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 2.0],
    ['G4', 1.0], ['A4', 1.0], ['B4', 1.0], ['G4', 1.0], ['A4', 1.0], ['E4', 1.0], ['F#4', 1.0], ['G4', 2.0],
    ['D5', 1.0], ['B4', 1.0], ['G4', 1.0], ['A4', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 1.0], ['G4', 2.0],
  ]),
  'HANOVER': makeMelody([
    ['G4', 0.6], ['G4', 0.6], ['D4', 0.6], ['G4', 1.2], ['A4', 0.6],
    ['B4', 0.6], ['A4', 0.6], ['G4', 0.6], ['D5', 1.8],
    ['B4', 0.6], ['B4', 0.6], ['A4', 0.6], ['G4', 1.2], ['F#4', 0.6],
    ['E4', 0.6], ['A4', 0.6], ['F#4', 0.6], ['D4', 1.8],
    ['D5', 0.6], ['D5', 0.6], ['C5', 0.6], ['B4', 1.2], ['B4', 0.6],
    ['A4', 0.6], ['G4', 0.6], ['A4', 0.6], ['D4', 1.8],
    ['G4', 0.6], ['A4', 0.6], ['B4', 0.6], ['C5', 1.2], ['B4', 0.6],
    ['A4', 0.6], ['G4', 0.6], ['A4', 0.6], ['G4', 1.8]
  ]),
  'HYFRYDOL': makeMelody([
    ['G4', 0.8], ['G4', 0.8], ['A4', 0.8], ['A4', 0.8],
    ['B4', 0.8], ['A4', 0.8], ['B4', 0.8], ['C5', 0.8],
    ['D5', 1.6], ['D5', 0.8], ['C5', 0.8], ['B4', 0.8],
    ['A4', 0.8], ['B4', 0.8], ['A4', 0.8], ['G4', 1.6],
    ['G4', 0.8], ['G4', 0.8], ['A4', 0.8], ['A4', 0.8],
    ['B4', 0.8], ['A4', 0.8], ['B4', 0.8], ['C5', 0.8],
    ['D5', 1.6], ['D5', 0.8], ['C5', 0.8], ['B4', 0.8],
    ['A4', 0.8], ['B4', 0.8], ['A4', 0.8], ['G4', 1.6]
  ]),
  'LAUDA ANIMA': makeMelody([
    ['D4', 0.8], ['F#4', 0.8], ['A4', 0.8], ['D5', 1.6], ['C#5', 0.8],
    ['B4', 0.8], ['A4', 0.8], ['G4', 0.8], ['F#4', 2.4],
    ['A4', 0.8], ['A4', 0.8], ['A4', 0.8], ['B4', 1.6], ['A4', 0.8],
    ['G4', 0.8], ['F#4', 0.8], ['E4', 0.8], ['D4', 2.4]
  ]),
  'ST. ANNE': makeMelody([
    ['G4', 1.0], ['B4', 1.0], ['A4', 1.0], ['G4', 1.0], ['D5', 1.0], ['B4', 1.0], ['C5', 1.0], ['D5', 2.0],
    ['B4', 1.0], ['A4', 1.0], ['G4', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 1.0], ['G4', 3.0]
  ]),
  'DUKE STREET': makeMelody([
    ['G4', 1.0], ['G4', 1.0], ['A4', 1.0], ['B4', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 1.0], ['G4', 2.0],
    ['B4', 1.0], ['C5', 1.0], ['D5', 1.0], ['E5', 1.0], ['D5', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 2.0],
  ])
};

export function getAccurateMelody(tuneName: string, title?: string): Note[] | null {
  const normTune = tuneName.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (ACCURATE_TUNES[normTune]) {
    return ACCURATE_TUNES[normTune];
  }

  // Fallback map for specific synonyms
  const synonyms: Record<string, string> = {
    'CWM_RHONDDA': 'CWM RHONDDA',
    'LAUDAANIMA': 'LAUDA ANIMA',
    'OLD100TH': 'OLD HUNDREDTH',
    'OLDHUNDREDTH': 'OLD HUNDREDTH',
  };

  const resolved = synonyms[normTune];
  if (resolved && ACCURATE_TUNES[resolved]) {
    return ACCURATE_TUNES[resolved];
  }

  // Test title matching too
  if (title) {
    const normTitle = title.toLowerCase();
    if (normTitle.includes('holy, holy, holy')) return ACCURATE_TUNES['NICAEA'];
    if (normTitle.includes('abide with me')) return ACCURATE_TUNES['EVENTIDE'];
    if (normTitle.includes('love divine, all loves excelling')) return ACCURATE_TUNES['BEECHER'];
    if (normTitle.includes('guide me, o thou great redeemer')) return ACCURATE_TUNES['CWM RHONDDA'];
    if (normTitle.includes('praise, my soul, the king of heaven')) return ACCURATE_TUNES['LAUDA ANIMA'];
    if (normTitle.includes('o worship the king')) return ACCURATE_TUNES['HANOVER'];
  }

  return null;
}
