import { useState, useRef } from "react";
import "./VoiceAssistant.css";

export default function VoiceAssistant() {
  const [language, setLanguage] = useState("en-IN");
  const recognitionRef = useRef(null);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition API not supported in this browser!");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.start();

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript;
      alert("You said: " + command);
    };

    recognitionRef.current = recognition;
  };

  return (
    <div className="voice-assistant">
      <h3>Voice Assistant 🎤</h3>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en-IN">English</option>
        <option value="hi-IN">Hindi</option>
        <option value="ta-IN">Tamil</option>
        <option value="te-IN">Telugu</option>
        <option value="ml-IN">Malayalam</option>
      </select>

      <button onClick={startListening}>Start Speaking</button>
    </div>
  );
}
