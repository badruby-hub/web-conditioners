import { useEffect, useRef, useState } from "react";
import classes from "./splite.module.css";
import { SplitProps } from "./split.props";
import { ArrowRightLeft } from "lucide-react";

export default function Split({ leftImg, rightImg }: SplitProps) {
  const [isDown, setIsDown] = useState<Boolean>(false);
  const [lineX, setLineX] = useState<number>(0);
  const [widthLeft, setWidthLeft] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      setLineX((x) => computeState(x, e));
      setWidthLeft((x) => computeState(x, e));
    };

    if (isDown) {
      window.addEventListener("pointermove", handleMove);
    }
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [isDown]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const handleUp = () => setIsDown(false);
    setLineX(ref.current.clientWidth / 2);
    setWidthLeft(ref.current.clientWidth / 2);

    window.addEventListener("pointerup", handleUp);

    return () => {
      window.removeEventListener("pointerup", handleUp);
    };
  }, []);

  const computeState = (x: number, e: MouseEvent | TouchEvent) => {
    if (!ref.current) {
      return 0;
    }
    let pos: number;
    if ("movementX" in e) {
      pos = x + e.movementX;
    } else {
      pos = e.touches[0].pageX - ref.current.offsetLeft;
    }
    if (pos >= 0 && pos <= ref.current.clientWidth) {
      return pos;
    }
    return x;
  };

  const down = () => {
    setIsDown(true);
  };
  return (
    <div
      className={classes.right}
      ref={ref}
      style={{ backgroundImage: `url(${rightImg})` }}
    >
      <div
        className={classes.left}
        style={{
          backgroundImage: `url(${leftImg})`,
          clipPath: `polygon(0% 0%, ${widthLeft}px 0%, ${widthLeft}px 100%, 0% 100%)`,
        }}
      ></div>
      <div
        style={{ left: lineX }}
        className={classes.line}
        onPointerDown={down}>
            <div className={classes.btn__split}>
              <ArrowRightLeft className={classes.ArrowRightLeft} size={20}/>
            </div>
        </div>
    </div>
  );
}
