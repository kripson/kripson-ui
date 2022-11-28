import React, { FC, useEffect, useState } from "react";
import "./DoubleMouseCursor.scss";

type ComponentWithChildProps = React.PropsWithChildren<{ styles?: Record<string, string | number>; cursorTrailStyles?: Record<string, string | number> }>;

const DoubleMouseCursor: FC<ComponentWithChildProps> = ({ children, styles, cursorTrailStyles }) => {
  const [pointerPosition, setPointerPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [pointerTrailPosition, setPointerTrailPosition] = useState<Record<string, number> | null>(null);

  const [combined, setCombined] = useState(true);

  const onMouseMove = (event: MouseEvent) => {
    setPointerPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    if ((pointerPosition.x, pointerPosition.y)) {
      setTimeout(() => {
        setPointerTrailPosition({
          x: pointerPosition.x - 10,
          y: pointerPosition.y - 10,
        });
      }, 100);
    }
  }, [pointerPosition]);

  useEffect(() => {
    if (pointerTrailPosition && pointerPosition && pointerTrailPosition.x === pointerPosition.x - 10 && pointerTrailPosition.y === pointerPosition.y - 10) {
      setCombined(true);
    } else {
      setCombined(false);
    }
  }, [pointerTrailPosition]);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.getElementsByTagName("html")[0].style.cursor = "none";
    return () => {
      document.getElementsByTagName("html")[0].style.cursor = "default";
    };
  }, []);

  const getCursorTrailStyle = () => {
    if (combined) {
      return {
        ...cursorTrailStyles,
        width: "40px",
        height: "40px",
        top: pointerTrailPosition?.y ?? 0,
        left: pointerTrailPosition?.x ?? 0,
      };
    } else {
      return {
        ...cursorTrailStyles,
        top: pointerTrailPosition?.y ?? 0,
        left: pointerTrailPosition?.x ?? 0,
      };
    }
  };

  return (
    <div className="kripsonui-double-mouse-cursor" style={{ ...styles, top: pointerPosition?.y ?? 0, left: pointerPosition?.x ?? 0 }}>
      <div className="kripsonui-cursor-trail" style={getCursorTrailStyle()}></div>
    </div>
  );
};

export default DoubleMouseCursor;
