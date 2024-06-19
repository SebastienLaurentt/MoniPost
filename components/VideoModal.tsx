"use client";

import { Eye, X } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./ui/button";

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={openModal}
          className="fixed bottom-0 left-2 z-50 w-[100px] space-x-2 border hover:border-primary hover:bg-primary hover:text-secondary-foreground md:left-6 xl:bottom-6"
        >
          <span>Video</span> <Eye />
        </Button>
      )}

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="relative w-4/5 max-w-3xl overflow-hidden rounded-lg bg-white">
              <button
                onClick={closeModal}
                className="absolute right-2 top-2 z-20 text-white"
              >
                <X />
              </button>
              <video controls autoPlay className="w-full">
                <source src="../videos/HeroVid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default VideoModal;
