import { useState, useEffect } from "react";

interface UseSpeechSynthesisProps {
  text: any;
}

function useSpeechSynthesis({ text }: UseSpeechSynthesisProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const utterance = new SpeechSynthesisUtterance();
      console.log(
        "🚀 ~ file: useSpeechSynthesis.tsx:13 ~ useEffect ~ utterance:",
        utterance
      );
      utterance.lang = "en-US";
      utterance.text = `${text}`;
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

export { useSpeechSynthesis };
