import { useRef, useEffect } from "react";

const useEventListener = (
  eventName: string,
  handler: (_: any) => void,
  element: EventTarget = document
) => {
  const savedHandler = useRef(null);
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) {
      return () => {};
    }

    const eventListener = (event: any) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default useEventListener;
