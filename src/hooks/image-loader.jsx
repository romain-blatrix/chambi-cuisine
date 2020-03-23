import { useState, useEffect } from "react";

const useImage = src => {
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!src) {
      return;
    }
    (async src => {
      try {
        const image = await src;
        setStatus("loaded");
        setImage(image.default);
      } catch (e) {
        console.error(e);
        setStatus("error");
        setImage(null);
      }
    })(src);
  }, [src]);

  return [image, status];
};

export default useImage;
