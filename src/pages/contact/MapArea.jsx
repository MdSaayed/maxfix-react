import React, { useRef } from "react";
import { useZoomReveal } from "../../hooks/useGsapZoom";

const MapArea = () => {
  const animateRef = useRef();

  // Animation

  useZoomReveal(animateRef, [".map__location"], { type: "in" });

  return (
    <div className="map map--google" ref={animateRef}>
      <div className="map__container container">
        <div className="map__location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.06396691728!2d90.2548777186782!3d23.780753031822403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1750328483148!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapArea;
