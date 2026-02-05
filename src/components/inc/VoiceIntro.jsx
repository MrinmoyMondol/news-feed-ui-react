import { useState } from "react";
import { Play, Pause } from "lucide-react";
import WavesurferPlayer from "@wavesurfer/react";

const VoiceMoment = () => {
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Called when Wavesurfer is ready
  const onReady = (ws) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  // Play/pause handler
  const togglePlay = () => {
    if (!wavesurfer) return;
    wavesurfer.playPause();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[#F8F9FB] w-full max-w-md mx-auto rounded-lg px-6 py-4 shadow-sm border border-[#ECEEF2]">
      <h4 className="text-[15px] font-bold text-gray-900 text-center mb-2 tracking-tight">
        Voice Values Moment
      </h4>

      <div className="flex items-center gap-3">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="flex items-center justify-center ml-[30px] text-black transition-transform active:scale-95"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause size={24} fill="currentColor" />
          ) : (
            <Play size={24} fill="currentColor" className="ml-[1px]" />
          )}
        </button>

        {/* Waveform */}
        <div className="flex-1">
          <WavesurferPlayer
            height={36}
            waveColor="#111111"
            progressColor="#111111"
            cursorColor="#111111"
            cursorWidth={0}
            barWidth={2}
            barGap={2}
            barRadius={2}
            url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            onReady={onReady}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            style={{ width: "100%" }}
          />
        </div>

        {/* Duration placeholder */}
        <span className="text-[13px] mr-[40px] font-bold  tabular-nums min-w-[40px] text-right">
          1:48
        </span>
      </div>

      <p className="text-center text-[12px] font-bold  font-medium text-gray-500 mt-3">
        Listen before you like.
      </p>
    </div>
  );
};

export default VoiceMoment;
