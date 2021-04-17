import {note} from '../components/Quiz/_data/notes';

export function useRandomNote(notes: note[]): note {
  return notes[0];
}
