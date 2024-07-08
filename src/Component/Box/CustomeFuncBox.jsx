const CustomeFuncBtn = ({ data, currentId, setOpened }) => {
  return (
    <div
      className={`flex items-center h-[36px] pl-[16px] pr-[12px] cursor-pointer
        ${
          currentId === data.id
            ? "bg-hover-black hover:bg-[rgba(255,255,255,0.2)]"
            : "hover:bg-hover-black"
        } `}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setOpened(false);
        if (data.handleOnClick) {
          data.handleOnClick(data);
        }
      }}
    >
      {data.icon && <div className='mr-[16px]'>{data.icon}</div>}
      <div
        className={`text-[14px] leading-[20px] text-nowrap ${
          data.icon && "mr-[24px]"
        } `}
      >
        {data.text}
      </div>
    </div>
  );
};

const CustomeFuncBox = ({
  style,
  setOpened,
  currentId,
  funcList1,
  funcList2,
}) => {
  return (
    <div
      className={`absolute bg-[#282828] rounded-[12px] py-[8px] flex flex-col overflow-hidden z-[2000]
        ${style}
    `}
    >
      {funcList1 &&
        funcList1.map((item) => (
          <CustomeFuncBtn
            key={item.id}
            data={item}
            currentId={currentId}
            setOpened={setOpened}
          />
        ))}
      {funcList2 && <hr className='border-[rgba(255,255,255,0.2)] my-[8px]' />}
      {funcList2 &&
        funcList2.map((item) => (
          <CustomeFuncBtn
            key={item.id}
            data={item}
            currentId={currentId}
            setOpened={setOpened}
          />
        ))}
    </div>
  );
};
export default CustomeFuncBox;
