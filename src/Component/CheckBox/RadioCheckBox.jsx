import { useState, useEffect } from "react";

const RadioCheckBox = ({ checked, setChecked, id }) => {
  const [active, setActive] = useState(false);

  const [clicked, setClicked] = useState(false);

  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    setActive(true);
    let timeOut = setTimeout(() => {
      setActive(false);
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [clicked]);

  return (
    <div className='relative'>
      <div
        className={`size-[20px] rounded-[50%] border-[2px] relative z-[30] cursor-pointer
        ${checked !== id ? " border-white" : "border-blue-3E"}
        `}
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
        onClick={() => {
          setChecked(id);
        }}
      >
        <div
          className={`w-full h-full rounded-[50%] bg-blue-3E`}
          style={{
            transform: checked === id ? "scale(0.5)" : "scale(0)",
            transition: "transform ease 0.28s",
          }}
        ></div>
      </div>

      {active && (
        <div
          className={`absolute top-[-17px] left-[-17px] size-[54px] rounded-[50%] opacity-[0.3] z-[20] ping
        ${checked === id ? "bg-blue-3E" : "bg-white-F1"}
        `}
        ></div>
      )}
    </div>
  );
};
export default RadioCheckBox;
