import { useSpeechSynthesis } from './useSpeechSynthesis';

function Sentence({ text }: { text: string }) {
  const { isPlaying, setIsPlaying } = useSpeechSynthesis({ text });

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}
export default Sentence