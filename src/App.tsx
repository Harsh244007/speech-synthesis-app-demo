import React, { useState, useEffect } from "react";
import { fetchSentences } from "./Components/api";
import "./App.css";
import Sentence from "./Components/sentence";

interface UseSpeechSynthesisProps {
  userId: any;
  id: Number;
  title: string;
  body: any;
}

function App() {
  const [sentences, setSentences] = useState<any>([]);
  const [limit, setLimit] = useState<number>(5); // Number of sentences to load

  useEffect(() => {
    fetchSentences(limit).then((data) => setSentences(data));
  }, [limit]);
  console.log("🚀 ~ file: App.tsx:8 ~ App ~ sentences:", sentences);

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 5); // Increase the limit for fetching
  };
  return (
    <div>
      <h1>Sentences</h1>
      {sentences
        ? sentences.map((sentence: UseSpeechSynthesisProps, index: any) => {
            console.log(sentence);
            return (
              <>
                <Sentence key={index} text={sentence.title} />{" "}
              </>
            );
          })
        : "Loading Your App"}
      {sentences ? <button onClick={handleLoadMore}>Load More</button> : ""}
    </div>
  );
}

export default App;
