import {useState} from 'react';
import {note} from '../components/Quiz/_data/notes';

export function useRandomNote(notes: note[]) {
  const [currentNote, setCurrentNote] = useState<note>(notes[0]);
  const generateRandomNote = () => {
    const randomNumber = Math.floor(Math.random() * notes.length);
    setCurrentNote(notes[randomNumber]);
  };
  return {
    generateRandomNote,
    currentNote,
  };
}
