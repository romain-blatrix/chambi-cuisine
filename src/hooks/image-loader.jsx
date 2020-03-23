import { useState, useEffect } from "react";

const useImage = src => {
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!src) {
      return;
    }
    (src => {
      import(`assets/image/${src}`)
        .then(image => {
          setStatus("loaded");
          setImage(image.default);
        })
        .catch(err => {
          setStatus("error");
          setImage(null);
        });
    })(src);
  }, [image, src]);

  return [image, status];
};

export default useImage;
