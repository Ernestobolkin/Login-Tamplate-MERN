import { useEffect, useRef } from "react";
export const useLogger = (value) => {
  const logger = useRef(`%c ${value}`);
  useEffect(() => {
    console.log(logger.current, "font-size:12px; color:blue");
  });
};
