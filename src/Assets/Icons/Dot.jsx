
const Dot = ({color}) => {
  return (
    <div className={`w-[4px] h-[4px] mx-[6px] rounded-[50%] ${color || 'bg-[#3ea6ff]'}`}>

    </div>
  )
};
export default Dot;