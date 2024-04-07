"use client"
import { useEffect, useState } from "react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <IconButton
      aria-label="Scroll to top"
      icon={<TriangleUpIcon />}
      position="fixed"
      bottom="4"
      right="4"
      height="80px"
      width="80px"
      rounded="full"
      p="2"
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.2s"
      onClick={scrollToTop}
    />
  );
};

export default ScrollToTopButton;
