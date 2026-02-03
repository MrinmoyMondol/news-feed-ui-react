import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const VoiceMoment = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // প্লে/পজ টগল ফাংশন
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  // ওয়েভফর্মের বারগুলো (Elegant লুকের জন্য আরও বেশি বার যোগ করা হয়েছে)
  const waveformBars = [
    4, 8, 6, 12, 10, 5, 14, 8, 10, 6, 12, 9, 7, 11, 8, 13, 10, 6, 12, 8, 9, 11, 7, 10, 6, 12, 8, 5, 14, 9, 11, 7
  ];

  return (
    <div className="bg-[#F8F9FB]  px-[6px] py-[5px] w-full  mx-auto shadow-sm transition-all duration-300">
      

      <h4 className="text-[14px] font-bold text-gray-800 text-center mb-5 tracking-tight uppercase opacity-80">
        Voice Values Moment
      </h4>

      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-black transition-transform active:scale-90"
          style={{ border: '1px solid rgba(0,0,0,0.05)' }}
        >
          {playing ? (
            <Pause size={20} fill="currentColor" />
          ) : (
            <Play size={20} fill="currentColor" className="ml-1" />
          )}
        </button>

        <div className="flex-1 flex items-center justify-center gap-[3px] h-[30px]">
          {waveformBars.map((h, i) => (
            <div
              key={i}
              className={`w-[2.5px] rounded-full transition-all duration-500 ${
                playing ? "bg-black" : "bg-gray-300"
              }`}
              style={{ 
                height: `${h * 1.8}px`,
                animation: playing ? `waveBounce 1.2s ease-in-out infinite ${i * 0.05}s` : 'none'
              }}
            />
          ))}
        </div>

        <span className="text-[13px] m-[12px] font-bold text-gray-600 tabular-nums">
          1:48
        </span>
      </div>

      <p className="text-center text-[12px] font-medium text-gray-400 mt-4 tracking-wide">
        Listen before you like
      </p>

      <audio
        ref={audioRef}
        onEnded={() => setPlaying(false)}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        className="hidden"
      />

  
    </div>
  );
};

export default VoiceMoment;