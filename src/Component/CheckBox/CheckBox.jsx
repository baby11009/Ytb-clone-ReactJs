const Checkbox = ({ checked, setChecked }) => {
  return (
    <div className='pr-[8px]'>
      <label htmlFor='' onClick={() => setChecked((prev) => !prev)}>
        <div className=''>
          <div className='w-[36px] h-[14px] relative mx-[1px] my-[4px]'>
            <div className='absolute w-full h-full rounded-[8px] bg-gray-71 opacity-[0.4]'></div>
            <div
              className='absolute size-[20px] rounded-[50%] top-[-3px] left-0 
              transition-transform ease-linear duration-[0.08] delay-[0.08]'
              style={{
                background: checked ? "#3EA6FF" : "#ffffff",
                transform: checked ? "translateX(16px)" : "translateX(0)",
              }}
            ></div>
          </div>
        </div>
      </label>
    </div>
  );
};
export default Checkbox;
