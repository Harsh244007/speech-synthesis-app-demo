import { useState, useEffect } from "react";

interface UseSpeechSynthesisProps {
  text: any;
}

export function useSpeechSynthesis({ text }: UseSpeechSynthesisProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const utterance = new SpeechSynthesisUtterance();
      utterance.lang = "en-US";
      // utterance.text = text;
      utterance.text = `<speak>${text}</speak>`;
      speechSynthesis.speak(utterance);
    } else {
      speechSynthesis.cancel();
    }

    return () => {
      speechSynthesis.cancel();
    };
  }, [isPlaying, text]);

  return { isPlaying, setIsPlaying };
}
