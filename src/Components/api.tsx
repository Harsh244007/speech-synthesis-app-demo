
interface UseSpeechSynthesisProps {
    userId: any,
    id:Number,
    title:string,
    body:any
  }

export async function fetchSentences(limit: number=5): Promise<Array<UseSpeechSynthesisProps>> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const data = await response.json();
    return data;
  }
  