import {useState} from 'react';
import {note} from '../components/Quiz/_data/notes';

export function useRandomNote(notes: note[]) {
  const randomNumber = (): number => Math.floor(Math.random() * notes.length);
  const [currentNote, setCurrentNote] = useState<note>(notes[randomNumber()]);
  const generateRandomNote = () => setCurrentNote(notes[randomNumber()]);
  return {
    generateRandomNote,
    currentNote,
  };
}
