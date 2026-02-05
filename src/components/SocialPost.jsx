import { useState, useRef } from "react";
import { Play,Pause , Mic, SquarePlay, Image as ImageIcon } from "lucide-react";
import ActionButtons from "./inc/ActionButtons.jsx";
import VoiceIntro from "./inc/VoiceIntro.jsx";

const SocialPost = ({
  name = "Nowreen",
  location = "New York City, United States",
  description = "Hi, I'm Nowreen, a warm and family-oriented Asian woman with a passion for nurturing meaningful connections, preserving cultural traditions, and creating heartfelt experiences through cooking, storytelling...",
  profileUrl = "https://i.imgur.com/8Km9tLL.png",
  imageUrl = "https://picsum.photos/seed/202/400/300",
  globe = "/src/assets/icon/world.png",
  stats = { likes: null, plays: 4, mics: 16, images: 23 },
}) => {

  const [likes, setLikes] = useState(stats.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(null);
      setLiked(false);
    } else {
      setLikes(1);
      setLiked(true);
    }
  };



  return (
    <div className="max-w-[520px] mx-auto bg-white border border-gray-200
     shadow-sm rounded-sm font-sans overflow-hidden">


      {/* 1. Header */}
      <div className="post-header ">
        <img src={profileUrl} alt="Profile" className="post-avatar" />
        <div className="post-meta my-[4px] font-bold ">
          <div className="post-top">
            <span className="font-bold post-name">{name}</span>
            <span className="dot"></span>
            <button className="follow-btn">Follow</button>
          </div>
          <div className="post-bottom">
            <span>37m</span>
            <span className="dot"></span>
            
            <img src={globe} alt="Public" className="w-[12px] h-[12px]" />

            <span className="dot"></span>
            <span className="location">{location}</span>
          </div>
        </div>
      </div>



      {/* 2. Voice Intro */}
 
      <VoiceIntro/>



      {/* 3. Text Content */}
      <div className="px-[10px] pb-6 flex justify-center">
        <p className="max-w-[520px] text-left text-[14.5px] leading-[1.6] text-[#1a2b3c]">
          {description}
          <span className="ml-1 text-[#5b6871] font-semibold cursor-pointer hover:underline">
            See more
          </span>
        </p>
      </div>

      {/* 4. Image */}
      <div className="w-full">
        <img src={imageUrl} alt="Post Content" className="block object-cover w-full h-auto" />
      </div>

      {/* 5. Post Banner */}
      <div className="flex items-center justify-between mt-[10px] bg-white px-[10px]">
        <div className="flex flex-col ml-[10px]">
          <span className="text-[13px] text-left text-[#65676b] leading-[1]">Share Post</span>
          <h3 className="text-[16px] font-bold text-[#050505] mt-[2px] leading-[1] tracking-tight">
            Tell your story in your own words
          </h3>
        </div>
        <button className="bg-[#e4e6eb] hover:bg-[#d8dadf] text-[#050505] px-[14px] py-[7px] rounded-[8px] text-[14px] font-extrabold transition-colors whitespace-nowrap">
          Create Post
        </button>
      </div>

      {/* 6. Stats Bar */}
      <div className="flex items-center mb-[10px]  justify-between py-[8px] bg-[#f8f9fb]">
        <div className="flex items-center px-[10px] -space-x-3.5">
          <img src="https://i.pravatar.cc/100?u=a" className="w-[30px] h-[30px] rounded-full object-cover" alt="u1" />
          <img src="https://i.pravatar.cc/100?u=b" className="w-[30px] h-[30px] rounded-full object-cover" alt="u2" />
          <img src="https://i.pravatar.cc/100?u=c" className="w-[30px] h-[30px] rounded-full object-cover" alt="u3" />
          <span className="text-[18px] font-semibold px-[5px] text-[#1a2b3c] ml-[15px] ml-1">{likes}</span>
        </div>

        <div className="flex items-center text-[#1a2b3c]">
          <div className="flex items-center gap-[15px]">
            <SquarePlay size={20} strokeWidth={1.8}   />
            <span className="text-[16px] font-bold leading-none">{stats.plays}</span>
          </div>
          <span className="mx-[15px] h-[16px] border-l border-gray-300"></span>
          <div className="flex items-center gap-[15px]">
            <Mic size={20} strokeWidth={1.8} />
            <span className="text-[16px] font-bold leading-none">{stats.mics}</span>
          </div>
          <span className="mx-[15px] h-[16px] border-l border-gray-300"></span>
          <div className="flex items-center gap-[15px] mr-[12px] ">
            <ImageIcon size={20} strokeWidth={1.8} />
            <span className="text-[16px] font-bold leading-none">{stats.images}</span>
          </div>
        </div>


      </div>

      {/* 7. Action Buttons */}
      <ActionButtons liked={liked} onLike={handleLike} />

      {/* 8. Footer */}
      <div className="flex justify-end px-5 py-5 bg-white">
        <div className="inline-flex items-center bg-[#f6f7f9] rounded-full p-[10px] m-[10px]">
          <span className="text-[14px] text-[#5b6871] mr-[8px] font-medium leading-none">Post Approved by</span>
          <img src="https://i.pravatar.cc/100?u=admin" className="w-[28px] h-[28px] rounded-full object-cover ml-4" alt="Admin Avatar" />
        </div>
      </div>
    </div>
  );
};

export default SocialPost;
