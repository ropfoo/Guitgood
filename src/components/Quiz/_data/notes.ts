export enum Scale {
  MAJOR,
  MINOR,
}

export type ScaleType = Scale.MAJOR | Scale.MINOR;

export type Triad = [string, string, string];

export interface note {
  name: string;
  triadsMajor: Triad;
  triadsMinor: Triad;
}

export const notes: note[] = [
  {name: 'A', triadsMajor: ['A', 'C#', 'E'], triadsMinor: ['A', 'C', 'E']},
  {name: 'B', triadsMajor: ['B', 'D#', 'F#'], triadsMinor: ['B', 'D', 'F#']},
  {name: 'C', triadsMajor: ['C', 'E', 'G'], triadsMinor: ['C', 'Eb', 'G']},
];
