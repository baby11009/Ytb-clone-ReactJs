

const SmCommentCard = ({img,name,text}) => {
  return (
    <div className="flex items-center gap-[8px] text-[14px] leading-[20px]">
        <img src={img} alt="" className="w-[24px] h-[24px] rounded-[50%]"/>
        <span>{text}</span>
    </div>
  )
};
export default SmCommentCard;