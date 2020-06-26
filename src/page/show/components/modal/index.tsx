import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import style from "./index.module.scss";
import { Refs } from "./declare";
const prevent = (e: TouchEvent) => {
  e.preventDefault();
};
function Modal(props: any, ref: any) {
  const [width, setWidth] = useState("0");
  const [left, setLeft] = useState("100%");
  const [active, setActive] = useState(false);
  useEffect(() => {
    toggle(active);
  }, [active]);
  const toggle = (active: boolean) => {
    if (active) {
      document.body.addEventListener("touchmove", prevent, { passive: false });
      setTimeout(() => {
        setWidth("18.75rem");
        setLeft("0");
      }, 0);
    } else {
      document.body.removeEventListener("touchmove", prevent);
      setTimeout(() => {
        setWidth("0");
        setLeft("100%");
      }, 0);
    }
  };
  useImperativeHandle(
    ref,
    (): Refs => ({
      setActive,
    })
  );
  return (
    <div
      className={style.abs}
      style={{
        left,
      }}
      onClick={()=>setActive(false)}
    >
      <div
      onClick={(e)=>{
          e.preventDefault()
          e.stopPropagation()
      }}
        className={style.modal}
        style={{
          width,
        }}
      ></div>
    </div>
  );
}
export default forwardRef(Modal);
