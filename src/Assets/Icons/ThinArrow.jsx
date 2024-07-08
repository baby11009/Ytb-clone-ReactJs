const ThinArrow = ({size, color}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={size || '16'}
      width={size || '16'}
      viewBox='0 0 16 16'
      focusable='false'
      style={{
        pointerEvents: "none",
        display: "inherit",
      }}
      fill={color || 'rgb(255,255,255)'}
    >
      <path d='M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z'></path>
    </svg>
  );
};
export default ThinArrow;
