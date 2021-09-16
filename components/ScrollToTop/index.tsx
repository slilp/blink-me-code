import React, { useEffect, useState } from "react";
import { BsShift } from "react-icons/bs";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed md:bottom-8 md:right-8 bottom-4 right-4 z-40">
      {isVisible && (
        <div
          className="flex justify-center items-center cursor-pointer rounded-full w-14 h-14  bg-gradient-to-r from-yellow-400 to-yellow-700"
          onClick={scrollToTop}
        >
          <span className="text-white text-3xl">
            <BsShift></BsShift>
          </span>
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
