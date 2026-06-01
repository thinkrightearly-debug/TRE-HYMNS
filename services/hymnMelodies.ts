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
    ['D4', 0.8], ['F4', 0.8], ['F4', 0.8], ['F4', 0.8], ['D#4', 0.8], ['D4', 1.6],
    ['C4', 0.8], ['D#4', 0.8], ['D#4', 0.8], ['D4', 1.6],
    ['D4', 0.8], ['D4', 0.8], ['D4', 1.6],
    ['D#4', 0.8], ['G4', 0.8], ['G4', 0.8], ['G4', 0.8], ['F4', 0.8], ['D#4', 1.6],
    ['D4', 0.8], ['F4', 0.8], ['F4', 0.8], ['D#4', 1.6],
    ['D4', 0.8], ['C4', 0.8], ['C4', 1.6]
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
  ]),
  'NEW BRITAIN': makeMelody([
    ['D4', 0.6], ['G4', 1.2], ['B4', 0.6], ['B4', 1.2], ['A4', 0.6], ['G4', 1.2], ['E4', 0.6], ['D4', 1.2],
    ['D4', 0.6], ['G4', 1.2], ['B4', 0.6], ['B4', 1.2], ['A4', 0.6], ['D5', 2.4],
    ['B4', 0.6], ['D5', 1.2], ['B4', 0.6], ['G4', 1.2], ['D4', 0.6], ['E4', 1.2], ['D4', 0.6], ['D4', 1.2],
    ['D4', 0.6], ['G4', 1.2], ['B4', 0.6], ['B4', 1.2], ['A4', 0.6], ['G4', 2.4]
  ]),
  'VILLE DU HAVRE': makeMelody([
    ['G4', 1.0], ['G4', 1.0], ['F#4', 1.0], ['G4', 1.0], ['A4', 1.5], ['B4', 0.5], ['A4', 1.0], ['G4', 1.0],
    ['D5', 1.0], ['B4', 1.0], ['C5', 1.0], ['D5', 2.0],
    ['D5', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 1.0], ['B4', 1.5], ['C5', 0.5], ['D5', 1.0], ['G4', 1.0],
    ['A4', 1.0], ['B4', 1.0], ['C5', 1.0], ['B4', 2.0], ['A4', 2.0], ['G4', 3.0]
  ]),
  'LOBE DEN HERREN': makeMelody([
    ['G4', 1.0], ['G4', 1.0], ['D5', 1.0], ['B4', 1.0], ['A4', 1.0], ['G4', 1.0], ['F#4', 1.0], ['E4', 1.0], ['D4', 1.0],
    ['E4', 1.0], ['F#4', 1.0], ['G4', 1.0], ['A4', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 3.0]
  ]),
  'FAITHFULNESS': makeMelody([
    ['G4', 1.0], ['B4', 1.0], ['A4', 1.0], ['G4', 1.0], ['C5', 1.5], ['B4', 0.5], ['A4', 1.0], ['G4', 1.0],
    ['A4', 1.0], ['B4', 1.0], ['C5', 1.0], ['A4', 1.0], ['D5', 2.0], ['C5', 2.0], ['B4', 3.0]
  ]),
  'TOPLADY': makeMelody([
    ['G4', 1.0], ['B4', 1.0], ['D5', 1.5], ['D5', 0.5], ['C5', 1.0], ['B4', 1.0],
    ['A4', 1.0], ['G4', 1.0], ['A4', 1.5], ['G4', 0.5], ['F#4', 1.0], ['G4', 2.0]
  ]),
  'ASSURANCE': makeMelody([
    ['B4', 1.0], ['B4', 1.0], ['B4', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 1.0],
    ['G4', 1.0], ['A4', 1.0], ['B4', 1.0], ['C5', 3.0],
    ['B4', 1.0], ['B4', 1.0], ['B4', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 1.0],
    ['A4', 1.0], ['B4', 1.0], ['A4', 1.0], ['G4', 3.0]
  ]),
  'HAMBURG': makeMelody([
    ['F4', 1.0], ['F4', 1.0], ['G4', 1.0], ['A4', 1.0], ['G4', 1.0], ['F4', 1.0], ['G4', 1.5], ['F4', 0.5], ['G4', 2.0],
    ['A4', 1.0], ['A4', 1.0], ['B4', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 2.0]
  ]),
  'HYMN TO JOY': makeMelody([
    ['B4', 1.0], ['B4', 1.0], ['C5', 1.0], ['D5', 1.0], ['D5', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 1.0],
    ['G4', 1.0], ['G4', 1.0], ['A4', 1.0], ['B4', 1.0], ['B4', 1.5], ['A4', 0.5], ['A4', 2.0],
    ['B4', 1.0], ['B4', 1.0], ['C5', 1.0], ['D5', 1.0], ['D5', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 1.0],
    ['G4', 1.0], ['G4', 1.0], ['A4', 1.0], ['B4', 1.0], ['A4', 1.5], ['G4', 0.5], ['G4', 2.0]
  ]),
  'SLANE': makeMelody([
    ['D4', 1.0], ['D4', 1.0], ['E4', 1.0], ['F#4', 1.5], ['E4', 0.5], ['D4', 1.0], ['E4', 1.0], ['D4', 2.0],
    ['A4', 1.0], ['B4', 1.0], ['D5', 2.0], ['C#5', 1.0], ['B4', 1.5], ['A4', 0.5], ['F#4', 1.0], ['A4', 2.0]
  ]),
  'DIADEMATA': makeMelody([
    ['G4', 1.0], ['G4', 1.0], ['G4', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 1.0],
    ['A4', 1.0], ['A4', 1.0], ['A4', 1.0], ['C5', 1.5], ['B4', 0.5], ['A4', 1.0],
    ['D5', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 2.0], ['G4', 2.0], ['F#4', 3.0]
  ]),
  'TO GOD BE THE GLORY': makeMelody([
    ['G4', 1.0], ['G4', 1.0], ['B4', 1.0], ['D5', 2.0], ['D5', 1.0], ['D5', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 3.0],
    ['A4', 1.0], ['A4', 1.0], ['C5', 1.0], ['E5', 2.0], ['E5', 1.0], ['D5', 1.0], ['C5', 1.0], ['B4', 1.0], ['D5', 3.0]
  ]),
  'EIN FESTE BURG': makeMelody([
    ['C5', 1.0], ['C5', 1.0], ['C5', 1.0], ['G4', 1.0], ['C5', 1.0], ['D5', 1.0], ['E5', 1.0], ['D5', 1.0], ['C5', 2.0],
    ['C5', 1.0], ['B4', 1.0], ['A4', 1.0], ['G4', 2.0]
  ]),
  'NETTLETON': makeMelody([
    ['G4', 1.0], ['G4', 1.0], ['A4', 1.0], ['B4', 1.0], ['A4', 1.0], ['G4', 1.0], ['F#4', 1.0], ['G4', 2.0],
    ['G4', 1.0], ['G4', 1.0], ['A4', 1.0], ['B4', 1.0], ['A4', 1.0], ['G4', 1.0], ['F#4', 1.0], ['G4', 2.0]
  ]),
  'O STORE GUD': makeMelody([
    ['G4', 1.0], ['G4', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 1.0], ['A4', 1.5], ['G4', 0.5], ['F#4', 1.0], ['G4', 2.0],
    ['G4', 1.0], ['G4', 1.0], ['B4', 1.5], ['C5', 0.5], ['D5', 1.0], ['C5', 1.5], ['B4', 0.5], ['A4', 1.0], ['G4', 2.0]
  ]),
  'OLD RUGGED CROSS': makeMelody([
    ['G4', 1.0], ['B4', 1.0], ['D5', 1.5], ['D5', 0.5], ['D5', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 1.0], ['G4', 3.0]
  ]),
  'SILENT NIGHT': makeMelody([
    ['G4', 1.5], ['A4', 0.5], ['G4', 1.0], ['E4', 3.0],
    ['G4', 1.5], ['A4', 0.5], ['G4', 1.0], ['E4', 3.0],
    ['D5', 2.0], ['D5', 1.0], ['B4', 3.0],
    ['C5', 2.0], ['C5', 1.0], ['G4', 3.0]
  ]),
  'ANTIOCH': makeMelody([
    ['D5', 2.0], ['C#5', 1.5], ['B4', 0.5], ['A4', 3.0], ['G4', 1.0], ['F#4', 2.0], ['E4', 2.0], ['D4', 4.0],
    ['A4', 3.0], ['B4', 1.0], ['B4', 3.0], ['C#5', 1.0], ['C#5', 3.0], ['D5', 4.0]
  ]),
  'MENDELSSOHN': makeMelody([
    ['D4', 1.0], ['G4', 1.0], ['G4', 1.5], ['F#4', 0.5], ['G4', 1.0], ['B4', 1.0], ['B4', 1.0], ['A4', 1.0],
    ['D5', 1.0], ['D5', 1.0], ['D5', 1.5], ['C5', 0.5], ['B4', 1.0], ['A4', 1.0], ['B4', 2.0]
  ]),
  'ADESTE FIDELES': makeMelody([
    ['G4', 1.0], ['G4', 2.0], ['D4', 1.0], ['G4', 2.0], ['A4', 2.0], ['D4', 2.0],
    ['B4', 1.5], ['A4', 0.5], ['B4', 1.0], ['C5', 1.0], ['B4', 2.0], ['A4', 2.0]
  ]),
  'LITTLE DONKEY': makeMelody([
    ['C4', 0.8], ['E4', 0.8], ['G4', 0.8], ['G4', 1.6],
    ['A4', 0.4], ['A4', 0.4], ['G4', 0.8], ['E4', 0.8], ['D4', 1.6],
    ['D4', 0.8], ['F4', 0.8], ['A4', 0.8], ['A4', 1.6],
    ['B4', 0.4], ['B4', 0.4], ['A4', 0.8], ['F4', 0.8], ['E4', 1.6]
  ]),
  'ROCKING': makeMelody([
    ['E4', 0.8], ['G4', 0.8], ['E4', 0.8], ['D4', 0.8],
    ['C4', 1.6], ['E4', 0.8], ['G4', 0.8],
    ['E4', 0.8], ['B4', 0.8], ['A4', 0.8], ['G4', 1.6]
  ]),
  'MY GOD IS SO BIG': makeMelody([
    ['G4', 0.4], ['G4', 0.4], ['G4', 0.8], ['A4', 0.8], ['B4', 1.6],
    ['A4', 0.4], ['A4', 0.4], ['A4', 0.8], ['B4', 0.8], ['C5', 1.6],
    ['B4', 0.8], ['B4', 0.8], ['A4', 0.8], ['G4', 0.8], ['A4', 0.8], ['B4', 0.8], ['G4', 1.6]
  ]),
  'O COME AND JOIN THE DANCE': makeMelody([
    ['D4', 0.6], ['G4', 0.6], ['G4', 0.6], ['A4', 0.6], ['B4', 1.2],
    ['B4', 0.6], ['A4', 0.6], ['G4', 0.6], ['A4', 0.6], ['D4', 1.2],
    ['D4', 0.6], ['B4', 0.6], ['B4', 0.6], ['C5', 0.6], ['D5', 1.2],
    ['C5', 0.6], ['B4', 0.6], ['A4', 0.6], ['G4', 1.2]
  ]),
  'RISE AND SHINE': makeMelody([
    ['D4', 0.6], ['G4', 0.6], ['G4', 0.6], ['G4', 0.6], ['A4', 0.6], ['B4', 1.2],
    ['B4', 0.6], ['G4', 0.6], ['B4', 0.6], ['A4', 1.2],
    ['A4', 0.6], ['F#4', 0.6], ['A4', 0.6], ['G4', 1.2]
  ]),
  'VICTORY AHEAD': makeMelody([
    ['D4', 0.5], ['G4', 1.0], ['G4', 1.0], ['G4', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 1.0], ['E4', 1.0], ['D4', 2.0],
    ['G4', 1.0], ['B4', 1.0], ['B4', 1.0], ['B4', 1.0], ['D5', 1.5], ['C5', 0.5], ['B4', 1.0], ['A4', 3.0],
    ['D5', 1.0], ['D5', 1.0], ['B4', 1.0], ['G4', 1.0], ['C5', 1.5], ['C5', 0.5], ['A4', 1.0], ['F#4', 1.0],
    ['G4', 1.0], ['A4', 1.0], ['B4', 1.0], ['C5', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 3.0]
  ]),
  'VICTORY': makeMelody([
    ['D4', 0.5], ['G4', 1.5], ['G4', 0.5], ['G4', 1.0], ['A4', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 1.0], ['E4', 1.0], ['D4', 2.0],
    ['D4', 0.5], ['G4', 1.5], ['G4', 0.5], ['B4', 1.0], ['D5', 1.0], ['D5', 1.5], ['B4', 0.5], ['A4', 3.0],
    ['D5', 1.0], ['D5', 1.0], ['B4', 1.0], ['G4', 1.0], ['C5', 1.5], ['C5', 0.5], ['B4', 1.0], ['G4', 1.0],
    ['D4', 0.5], ['G4', 1.5], ['A4', 0.5], ['B4', 1.0], ['C5', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 3.0],
    // Chorus
    ['D5', 1.0], ['B4', 1.0], ['G4', 1.0], ['C5', 1.5], ['C5', 0.5], ['B4', 1.0], ['G4', 1.0], ['A4', 2.0],
    ['B4', 1.0], ['B4', 1.0], ['G4', 1.0], ['E4', 1.0], ['D4', 1.5], ['E4', 0.5], ['G4', 1.0], ['A4', 2.0],
    ['D5', 1.0], ['D5', 1.0], ['B4', 1.0], ['G4', 1.0], ['C5', 1.5], ['C5', 0.5], ['B4', 1.0], ['G4', 1.0],
    ['D4', 0.5], ['G4', 1.5], ['A4', 0.5], ['B4', 1.0], ['C5', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 3.0]
  ]),
  'BETHANY': makeMelody([
    ['B4', 1.2], ['A4', 0.6], ['G4', 1.2], ['E4', 1.2], ['D4', 2.4],
    ['B4', 1.2], ['G4', 0.6], ['B4', 1.2], ['A4', 2.4],
    ['B4', 1.2], ['A4', 0.6], ['G4', 1.2], ['E4', 1.2], ['D4', 2.4],
    ['B4', 1.2], ['A4', 0.6], ['G4', 1.2], ['F#4', 1.2], ['G4', 2.4]
  ]),
  'SOLID ROCK': makeMelody([
    ['G4', 1.0], ['G4', 1.0], ['B4', 1.0], ['D5', 2.0], ['B4', 1.0], ['A4', 1.0], ['G4', 1.0], ['A4', 2.0],
    ['G4', 1.0], ['G4', 1.0], ['B4', 1.0], ['D5', 2.0], ['B4', 1.0], ['A4', 1.0], ['G4', 1.0], ['G4', 2.0],
    // Chorus
    ['D5', 2.0], ['B4', 1.0], ['G4', 1.0], ['A4', 2.0], ['F#4', 1.0], ['D4', 1.0],
    ['G4', 1.0], ['G4', 1.0], ['B4', 1.0], ['D5', 2.0], ['B4', 1.0], ['A4', 1.0], ['G4', 1.0], ['G4', 2.0]
  ]),
  'TRUST': makeMelody([
    ['B4', 1.0], ['A4', 1.0], ['G4', 1.0], ['B4', 1.0], ['D5', 1.0], ['D5', 1.0], ['C5', 1.0], ['B4', 2.0],
    ['B4', 1.0], ['A4', 1.0], ['G4', 1.0], ['B4', 1.0], ['A4', 2.0],
    // Chorus
    ['D5', 2.0], ['B4', 1.0], ['G4', 1.0], ['A4', 2.0], ['F#4', 1.0], ['D4', 1.0],
    ['B4', 1.0], ['A4', 1.0], ['G4', 1.0], ['B4', 1.0], ['A4', 1.0], ['G4', 2.0]
  ]),
  'PASS ME NOT': makeMelody([
    ['B4', 1.5], ['A4', 0.5], ['G4', 1.0], ['E4', 1.0], ['D4', 2.0],
    ['G4', 1.0], ['G4', 1.0], ['B4', 1.0], ['D5', 1.0], ['A4', 3.0],
    ['B4', 1.5], ['A4', 0.5], ['G4', 1.0], ['E4', 1.0], ['D4', 2.0],
    ['G4', 1.0], ['G4', 1.0], ['A4', 1.0], ['F#4', 1.0], ['G4', 3.0],
    // Chorus
    ['D5', 1.5], ['B4', 0.5], ['G4', 1.0], ['B4', 1.0], ['C5', 3.0],
    ['B4', 1.5], ['A4', 0.5], ['G4', 1.0], ['E4', 1.0], ['D4', 2.0],
    ['G4', 1.0], ['G4', 1.0], ['A4', 1.0], ['F#4', 1.0], ['G4', 3.0]
  ]),
  'GARDEN': makeMelody([
    ['D4', 0.5], ['G4', 1.0], ['B4', 1.0], ['G4', 1.0], ['B4', 1.0], ['D5', 1.5], ['C5', 0.5], ['B4', 1.0], ['B4', 1.0], ['A4', 3.0],
    ['D4', 0.5], ['G4', 1.0], ['A4', 1.0], ['F#4', 1.0], ['A4', 1.0], ['C5', 1.5], ['B4', 0.5], ['A4', 1.0], ['A4', 1.0], ['G4', 3.0],
    // Chorus
    ['B4', 1.5], ['B4', 0.5], ['B4', 1.0], ['B4', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 1.0], ['G4', 1.0], ['G4', 1.5], ['F#4', 0.5], ['E4', 1.0], ['E4', 1.0], ['D4', 3.0],
    ['D4', 0.5], ['G4', 1.0], ['B4', 1.0], ['G4', 1.0], ['B4', 1.0], ['D5', 1.5], ['C5', 0.5], ['B4', 1.0], ['A4', 1.0], ['G4', 3.0]
  ]),
  'SWEET HOUR': makeMelody([
    ['D4', 0.5], ['G4', 1.5], ['G4', 0.5], ['B4', 1.0], ['B4', 1.5], ['B4', 0.5], ['D5', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 1.0], ['E4', 1.5], ['D4', 0.5], ['G4', 1.0],
    ['B4', 1.5], ['A4', 0.5], ['G4', 1.0], ['B4', 1.5], ['A4', 0.5], ['G4', 1.0], ['A4', 3.0]
  ]),
  'HE LEADETH ME': makeMelody([
    ['D4', 0.5], ['G4', 1.0], ['A4', 1.0], ['B4', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 1.0], ['B4', 1.0], ['G4', 1.0],
    ['B4', 1.0], ['D5', 1.0], ['D5', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 3.0]
  ]),
  'PROMISES': makeMelody([
    ['B4', 0.5], ['B4', 1.0], ['B4', 0.5], ['B4', 1.0], ['B4', 0.5], ['G4', 0.5], ['B4', 1.0], ['F#4', 1.5], ['D4', 0.5],
    ['A4', 1.0], ['A4', 0.5], ['A4', 1.0], ['A4', 0.5], ['F#4', 0.5], ['A4', 1.0], ['G4', 2.0],
    ['B4', 1.0], ['B4', 0.5], ['B4', 1.0], ['B4', 0.5], ['B4', 0.5], ['C5', 0.5], ['D5', 1.0], ['C5', 1.5], ['B4', 0.5],
    ['A4', 1.0], ['G4', 0.5], ['A4', 1.0], ['B4', 0.5], ['A4', 1.0], ['G4', 2.0],
    // Chorus
    ['B4', 2.0], ['B4', 0.5], ['B4', 0.5], ['C5', 1.0], ['C5', 2.0],
    ['C5', 0.5], ['B4', 0.5], ['A4', 0.5], ['G4', 0.5], ['A4', 1.0], ['B4', 1.0], ['A4', 3.0],
    ['B4', 2.0], ['B4', 0.5], ['B4', 0.5], ['C5', 1.0], ['C5', 2.0],
    ['A4', 1.0], ['G4', 0.5], ['F#4', 1.0], ['A4', 0.5], ['G4', 3.0]
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
    'VICTORYAHEAD': 'VICTORY AHEAD',
    'TRUSTINJESUS': 'TRUST',
    'SOLIDROCK': 'SOLID ROCK',
    'HELEADETHME': 'HE LEADETH ME',
    'SWEETHOUR': 'SWEET HOUR',
    'PASSMENOT': 'PASS ME NOT',
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
    if (normTitle.includes('amazing grace')) return ACCURATE_TUNES['NEW BRITAIN'];
    if (normTitle.includes('it is well with my soul')) return ACCURATE_TUNES['VILLE DU HAVRE'];
    if (normTitle.includes('praise to the lord, the almighty')) return ACCURATE_TUNES['LOBE DEN HERREN'];
    if (normTitle.includes('great is thy faithfulness')) return ACCURATE_TUNES['FAITHFULNESS'];
    if (normTitle.includes('rock of ages')) return ACCURATE_TUNES['TOPLADY'];
    if (normTitle.includes('blessed assurance')) return ACCURATE_TUNES['ASSURANCE'];
    if (normTitle.includes('when i survey the wondrous cross')) return ACCURATE_TUNES['HAMBURG'];
    if (normTitle.includes('joyful, joyful, we adore thee')) return ACCURATE_TUNES['HYMN TO JOY'];
    if (normTitle.includes('be thou my vision')) return ACCURATE_TUNES['SLANE'];
    if (normTitle.includes('crown him with many crowns')) return ACCURATE_TUNES['DIADEMATA'];
    if (normTitle.includes('to god be the glory')) return ACCURATE_TUNES['TO GOD BE THE GLORY'];
    if (normTitle.includes('a mighty fortress is our god')) return ACCURATE_TUNES['EIN FESTE BURG'];
    if (normTitle.includes('come, thou fount of every blessing')) return ACCURATE_TUNES['NETTLETON'];
    if (normTitle.includes('how great thou art')) return ACCURATE_TUNES['O STORE GUD'];
    if (normTitle.includes('the old rugged cross')) return ACCURATE_TUNES['OLD RUGGED CROSS'];
    if (normTitle.includes('silent night')) return ACCURATE_TUNES['SILENT NIGHT'];
    if (normTitle.includes('joy to the world')) return ACCURATE_TUNES['ANTIOCH'];
    if (normTitle.includes('hark! the herald angels sing')) return ACCURATE_TUNES['MENDELSSOHN'];
    if (normTitle.includes('o come, all ye faithful')) return ACCURATE_TUNES['ADESTE FIDELES'];
    if (normTitle.includes('victory ahead')) return ACCURATE_TUNES['VICTORY AHEAD'];
    if (normTitle.includes('victory in jesus')) return ACCURATE_TUNES['VICTORY'];
    if (normTitle.includes('nearer, my god, to thee') || normTitle.includes('nearer my god to thee')) return ACCURATE_TUNES['BETHANY'];
    if (normTitle.includes('the solid rock') || normTitle.includes('my hope is built')) return ACCURATE_TUNES['SOLID ROCK'];
    if (normTitle.includes('tis so sweet to trust')) return ACCURATE_TUNES['TRUST'];
    if (normTitle.includes('pass me not')) return ACCURATE_TUNES['PASS ME NOT'];
    if (normTitle.includes('in the garden')) return ACCURATE_TUNES['GARDEN'];
    if (normTitle.includes('sweet hour of prayer')) return ACCURATE_TUNES['SWEET HOUR'];
    if (normTitle.includes('he leadeth me')) return ACCURATE_TUNES['HE LEADETH ME'];
    if (normTitle.includes('little donkey')) return ACCURATE_TUNES['LITTLE DONKEY'];
    if (normTitle.includes('sweetly sleep')) return ACCURATE_TUNES['ROCKING'];
    if (normTitle.includes('my god is so big')) return ACCURATE_TUNES['MY GOD IS SO BIG'];
    if (normTitle.includes('our god is so great')) return ACCURATE_TUNES['MY GOD IS SO BIG'];
    if (normTitle.includes('join the dance')) return ACCURATE_TUNES['O COME AND JOIN THE DANCE'];
    if (normTitle.includes('rise and shine')) return ACCURATE_TUNES['RISE AND SHINE'];
    if (normTitle.includes('standing on the promises')) return ACCURATE_TUNES['PROMISES'];
  }

  return null;
}

export function generateProceduralMelody(hymnId: number, title: string): Note[] {
  // Use hymnId to seed a deterministic helper so the tune for a specific hymn is always the same!
  // This makes it sound like a real, consistent, offline hymn tune!
  const seed = hymnId + title.length;
  const scale = ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5', 'G5']; // G major scale for a bright, sacred, traditional organ tune
  
  const notes: Note[] = [];
  
  // Simple deterministic pseudorandom generator
  let rSeed = seed;
  const rand = () => {
    const x = Math.sin(rSeed++) * 10000;
    return x - Math.floor(x);
  };
  
  // Phrase A (4 notes)
  const phraseA = [
    scale[Math.floor(rand() * 3)],       // Start on lower notes (G4, A4, B4)
    scale[Math.floor(rand() * 4) + 1],   // Step up
    scale[Math.floor(rand() * 4) + 2],   // Pivot
    scale[Math.floor(rand() * 3)]        // Return
  ];
  
  // Phrase B (4 notes) - goes higher for contrast/climax
  const phraseB = [
    scale[Math.floor(rand() * 3) + 4],   // High note (D5, E5, F#5)
    scale[Math.floor(rand() * 3) + 3],   // Step down
    scale[Math.floor(rand() * 4) + 2],   // Pivot
    scale[Math.floor(rand() * 4) + 1]    // Step down
  ];

  // Map into a full A-A-B-A structure (16 notes total) for genuine hymn form
  const fullSequence = [
    ...phraseA,
    ...phraseA,
    ...phraseB,
    phraseA[0],
    phraseA[1],
    scale[1], // Ending steps
    'G4'      // Clean resolution on tonic G4
  ];
  
  // Assign durations and pitches
  fullSequence.forEach((noteName, idx) => {
    // Beautiful cadenced duration pattern (e.g., 4/4 meter with final notes held)
    let duration = 0.8;
    if ((idx + 1) % 4 === 0) {
      duration = 1.6; // Holds at the end of each musical line
    }
    
    notes.push({
      name: noteName,
      pitch: PITCHES[noteName] || 392.00,
      duration: duration
    });
  });
  
  return notes;
}

