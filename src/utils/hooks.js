import { useState, useEffect } from "react";

export function useIsMobile() {
  const [width, setWidth] = useState(window.innerWidth < 900);

  useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth < 900);
    }

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width;
}
