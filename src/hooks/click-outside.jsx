import { useCallback, type ElementRef } from "react";

import useEventListener from "hooks/event-listener.jsx";

const useOnClickOutside = (ref: ElementRef<*>, handler: () => mixed) => {
  const listener = useCallback(
    (event: Event): void => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    },
    [ref, handler]
  );

  useEventListener("mouseup", listener);
  useEventListener("touchend", listener);
};

export default useOnClickOutside;
