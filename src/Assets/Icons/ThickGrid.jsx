const ThickGrid = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      focusable='false'
      width={24}
      height={24}
      style={{
        pointerEvents: "none",
        display: "inherit",
      }}
      fill='rgb(255,255,255)'
    >
      <path d='M2,4h6v7H2V4z M2,20h6v-7H2V20z M9,11h6V4H9V11z M9,20h6v-7H9V20z M16,4v7h6V4H16z M16,20h6v-7h-6V20z'></path>
    </svg>
  );
};
export default ThickGrid;
