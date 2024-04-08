"use client";
import React, { useState } from "react";
import AudioRecorder from "@/components/audioRecorder";


export default function Home() {

  const log = () => {
    console.log("Test")
  }

  const [effect, setEffect] = useState(false);

  return (
    <main className="flex pb-10 flex-grow flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-white">
      <h1 className="text-5xl font-medium">
        Audio<span className="text-blue-700">Scribe</span>
      </h1>
      <div className="py-2">
      Free Audio Transcription & Translation
      </div>
      <AudioRecorder />
    </main>
  );
}