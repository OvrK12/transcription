export default function Home() {
  return (
    <main className="flex pb-10 flex-grow flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-slate-100">
      <h1 className="text-5xl font-medium">
        Audio<span className="text-blue-700">Translate</span>
      </h1>
      <div className="py-2">
      Free Audio Transcription & Translation
      </div>
      <img
                src={"/images/mic_logo.png"}
                className="my-2 flex h-[70px] w-auto object-scale-down items-center justify-center rounded-md"
      />
    </main>
  );
}