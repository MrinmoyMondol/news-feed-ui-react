import { useState } from "react";
import { ThumbsUp, Bookmark, Phone, Share2 } from "lucide-react";
import ShareModal from "../modal/ShareModal.jsx";

const ActionButtons = ({ liked, onLike, shareUrl, shareText }) => {
  const [saved, setSaved] = useState(false);
  const [showShare, setShowShare] = useState(false);

  return (
    <>
      <div className="flex justify-around px-10 py-5 text-sm font-semibold">
        <div onClick={onLike} className={`flex items-center gap-[5px] cursor-pointer ${liked ? "text-[#FF595F]" : "text-gray-600"}`}>
          <ThumbsUp size={18} className={liked ? "fill-[#FF595F]" : ""} />
          Like
        </div>

        <div onClick={() => setSaved(!saved)} className={`flex items-center gap-[5px] cursor-pointer ${saved ? "text-[#FF595F]" : "text-gray-600"}`}>
          <Bookmark size={18} className={saved ? "fill-[#FF595F]" : ""} />
          Save
        </div>

        <div className="flex items-center gap-[3px] cursor-pointer text-gray-600">
          <Phone size={18} />
          Contact
        </div>

        <div  onClick={() => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(facebookShareUrl, "_blank", "noopener,noreferrer");
  }} className="flex items-center gap-[5px] cursor-pointer text-gray-600">
          <Share2 size={18} />
          Share
        </div>


      </div>

      {/* <ShareModal
        isOpen={showShare}
        onClose={() => setShowShare(false)}
        shareUrl={shareUrl}
        shareText={shareText}
      /> */}
    </>
  );
};

export default ActionButtons;
