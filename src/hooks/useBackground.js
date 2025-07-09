import { useMemo } from "react";

const useBackground = (imagePath, options = {}) => {
  return useMemo(() => {
    if (!imagePath) return {};

    return {
      backgroundImage: `url(${imagePath})`,
      backgroundSize: options.size || "cover",
      backgroundPosition: options.position || "center",
      backgroundRepeat: options.repeat || "no-repeat",
      zIndex: options.zIndex || 1,
      ...options.custom,
    };
  }, [imagePath, options]);
};

export default useBackground;
