const Play = ({ color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      focusable='false'
      style={{
        pointerEvents: "none",
        display: "inherit",
      }}
      fill={color || "rgb(255,255,255)"}
    >
      <path d='m7 4 12 8-12 8V4z'></path>
    </svg>
  );
};
export default Play;
