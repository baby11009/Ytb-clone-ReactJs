const Search = ({ size, color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={color || "#ffffff"}
      height={size || "24"}
      width={size || "24"}
      viewBox='0 0 24 24'
      focusable='false'
      style={{
        pointerEvents: "none",
        display: "inherit",
      }}
    >
      <path
        clipRule='evenodd'
        d='M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909ZM18 11a7 7 0 11-14 0 7 7 0 0114 0Z'
        fillRule='evenodd'
      ></path>
    </svg>
  );
};
export default Search;
