// ShareModal.jsx
import { X, Link2, Facebook, Instagram, MessageCircle, Send, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ShareModal = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareLink = "https://your-post-link.com";

  // Set mounted state asynchronously
  useEffect(() => {
    const mountTimer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(mountTimer);
  }, []);

  // Control render and animation based on modal open state
  useEffect(() => {
    if (isOpen) {
      const renderTimer = setTimeout(() => setShouldRender(true), 0);
      const animateTimer = setTimeout(() => setIsAnimating(true), 10);
      return () => {
        clearTimeout(renderTimer);
        clearTimeout(animateTimer);
      };
    } else {
      setIsAnimating(false);
      const unmountTimer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(unmountTimer);
    }
  }, [isOpen]);

  // Handle Escape key and scroll lock
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Copy link to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!mounted || !shouldRender) return null;

  return createPortal(
    // Main container: center modal
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 100000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      pointerEvents: 'auto'
    }}>

      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)',
          opacity: isAnimating ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />

      {/* Modal box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative p-[20px] bg-white rounded-3xl shadow-2xl overflow-hidden transition-none duration-300 ease-out"
        style={{
          opacity: isAnimating ? 1 : 0,
          transform: isAnimating ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          backgroundColor: 'white'
        }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">Share this post</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-none text-gray-400 hover:text-gray-600"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-8">
          {/* Social buttons */}
          <div className="grid grid-cols-4 gap-6 m-[5px]">
            {[
              { name: "Facebook", icon: <Facebook />, color: "#1A73E8" },
              { name: "Instagram", icon: <Instagram />, color: "#000" },
              { name: "WhatsApp", icon: <MessageCircle />, color: "text-green-500" },
              { name: "Messenger", icon: <Send />, color: "text-blue-500" },
            ].map((social) => (
              <button key={social.name} className="flex flex-col items-center gap-2 group outline-none">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 group-active:scale-90 ${social.color}`}>
                  {social.icon}
                </div>
                <span className="text-xs font-bold text-gray-500">{social.name}</span>
              </button>
            ))}
          </div>

          {/* Share link input */}
          <div className="flex items-center  gap-[4px] p-2 pl-4 mt-[15px] bg-gray-50 border border-gray-200 rounded-2xl group focus-within:border-blue-400">
            <Link2 size={18} className="text-gray-400 ml-[6px] shrink-0" />
            <input
              type="text"
              value={shareLink}
              readOnly
              className="flex-1  bg-transparent border-none text-sm text-gray-600  outline-none truncate font-medium"
            />
            <button
              onClick={handleCopy}
              className={`flex items-center gap-[2px] px-[6px] py-2.5 rounded-xl text-sm font-bold transition-none shrink-0 ${
                copied 
                  ? "bg-green-500 text-white" 
                  : "bg-blue-600 text-white" 
              }`}
            >
              {copied ? <Check size={16} /> : null}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ShareModal;
