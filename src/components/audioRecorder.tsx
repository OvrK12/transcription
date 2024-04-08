import {useState, useRef, SetStateAction} from 'react';

enum RecordingStatus {
    INACTIVE,
    RECORDING,
    PAUSED
}

export default function AudioRecorder () {
    const [permission, setPermission] = useState(false);
    const [active, setActive] = useState(false);
    const [recordingStatus, setRecordingStatus] = useState(RecordingStatus.INACTIVE);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [audio, setAudio] = useState<MediaSource | null>(null);

    const mediaRecorder = useRef<MediaRecorder | null>(null);

    const mimeType = "audio/webm"

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(streamData);
                setActive(!active); 
            } catch (err: any) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const startRecording = async () => {
        setRecordingStatus(RecordingStatus.RECORDING);
        //create new Media recorder instance using the stream
        if (stream) {
            const media = new MediaRecorder(stream, {mimeType});
        } else {
            console.error('Stream is null. Cannot start recording.');
        }
        //set the MediaRecorder instance to the mediaRecorder ref
        mediaRecorder.current = media;
        //invokes the start method to start the recording process
        if (mediaRecorder.current) {
            mediaRecorder.current.start();
            let localAudioChunks = [];
            mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === "undefined") return;
            if (event.data.size === 0) return;
            localAudioChunks.push(event.data);
            };
            setAudioChunks(localAudioChunks);
        } else {
            
        }
    };

    const stopRecording = () => {
        setRecordingStatus(RecordingStatus.INACTIVE);
        // Check if mediaRecorder.current is not null before calling methods or accessing properties
        if (mediaRecorder.current) {
            mediaRecorder.current.stop(); // Stop the recording instance if mediaRecorder.current is not null
            // Set the onstop event handler only if mediaRecorder.current is not null
            mediaRecorder.current.onstop = () => {
                // Create a blob file from the audio chunks data
                const audioBlob = new Blob(audioChunks, { type: mimeType });
                // Create a playable URL from the blob file.
                const audioUrl = URL.createObjectURL(audioBlob);
                // Set audio state or perform other actions
                setAudioChunks([]);
            };
        } else {
            console.log("mediaRecorder was null")
        }
    };

    return(
        <div>
            <button onClick={getMicrophonePermission} className="hover:opacity-50">
                <img
                    src={active ? "/images/stop_logo.png" : "/images/mic_logo.png"}
                    className="my-2 flex h-[60px] w-auto object-scale-down items-center justify-center rounded-md"
                />
            </button>
            <div className='flex flex-col gap-2 sm:gap-3 max-w-[400px] mx-auto w-full'>
                {[0, 1, 2].map(val => {
                    return (
                        <div key={val} className={'rounded-full h-2 sm:h-3 bg-slate-400 loading ' + `active${val}`}></div>
                    )
                })}
            </div>
        </div>
    );
};