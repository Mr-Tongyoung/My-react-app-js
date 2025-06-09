import { useEffect } from "react";
import { useState } from "react";

export default function BannedWordFilter() {
  const [sentences, setSentence] = useState([]);
  const [bannedWords, setBannedWords] = useState([]);

  const inputSentence = () => {
    const inputElement = document.getElementById("sentenceInput1");
    let inputValue = inputElement.value.trim();

    if(sentences.includes(inputValue)) {
      inputElement.value = ""; // 입력 후 입력창 비우기
      return;
    }

    for(let i = 0; i < bannedWords.length; i++){
      if(inputValue.includes(bannedWords[i])){
        inputValue = inputValue.replaceAll(bannedWords[i], "**");
      }
    }

    if (inputValue !== "") {
      setSentence((prev) => [...prev, inputValue]);
      inputElement.value = ""; // 입력 후 입력창 비우기
    }
  };

  const inputBannedWord = () => {
    const inputElement = document.getElementById("sentenceInput2");
    const inputValue = inputElement.value.trim();

    if(bannedWords.includes(inputValue)) {
      inputElement.value = ""; // 입력 후 입력창 비우기
      return;
    }

    if (inputValue !== "") {
      setBannedWords((prev) => [...prev, inputValue]);
      inputElement.value = ""; // 입력 후 입력창 비우기
    }
  };




  useEffect(() => {
    const latestBannedWord = bannedWords[bannedWords.length - 1];
    const updatedSentences = [];

    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i];

      if (sentence.includes(latestBannedWord)) {
        const replaced = sentence.replaceAll(latestBannedWord, "**");
        updatedSentences.push(replaced);
      } else {
        updatedSentences.push(sentence);
      }
    }

    setSentence(updatedSentences);
  }, [bannedWords]);



  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h1>금지어 필터기</h1>
        <p>사용자 입력:</p>
        <input type="text" id="sentenceInput1" />
        <button onClick={inputSentence} on>입력</button>
        <ul>
          {(() => {
            const items = [];
            for (let i = 0; i < sentences.length; i++) {
              items.push(<li key={i}>{sentences[i]}</li>);
            }
            return items;
          })()}
        </ul>
      </div>
      <div>
        <h1>금지어</h1>
        <p>금지어 입력:</p>
        <input type="text" id="sentenceInput2" />
        <button onClick={inputBannedWord}>입력</button>
        <ul>
          {(() => {
            const items = [];
            for (let i = 0; i < bannedWords.length; i++) {
              items.push(<li key={i}>{bannedWords[i]}</li>);
            }
            return items;
          })()}
        </ul>
      </div>
    </div>
  );
}
