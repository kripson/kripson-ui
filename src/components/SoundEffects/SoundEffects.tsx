import React from "react";
import "./SoundEffects.scss";
import buttonHover from "../../assets/sounds/button_hover.ogg";
const SoundEffects = () => {
  return (
    <div id="hover-sound">
      <embed src={buttonHover} id="hover-sound">
      </embed>
    </div>
  );
};

export default SoundEffects;
