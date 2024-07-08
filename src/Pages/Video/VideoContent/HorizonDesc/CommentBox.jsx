import { SortIcon, CloseIcon } from "../../../../Assets/Icons";
import { Comment, CommentInput } from "../../../../Component";
import { MyChannel } from "../../../../Assets/Images";

const CommentBox = ({setOpened}) => {
  return (
    <div className='bg-[#000] w-full h-[70vh] rounded-[12px] flex flex-col'>
      <div className='px-[16px] py-[4px] flex items-center justify-between '>
        <div className='my-[10px] flex items-center gap-[8px]'>
          <h4 className='text-[20px] leading-[28px] font-bold'>Bình luận</h4>
          <span className=' text-gray-A'>3,1 N</span>
        </div>
        <div className='flex gap-[8px]'>
          <button className='w-[40px] h-[40px] flex items-center justify-center'>
            <SortIcon />
          </button>
          <button
            className='w-[40px] h-[40px] rounded-[50%] hover:bg-[rgba(255,255,255,0.2)]
                      flex items-center justify-center'
                      onClick={() => setOpened(false)}
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className='px-[16px] flex-1 overflow-y-auto menu-scrollbar'>
        <Comment verify={true} owner={true} reply={true} />
        <Comment verify={true} owner={true} reply={true} />
        <Comment verify={true} reply={true} />
        <Comment verify={true} />
        <Comment reply={true} />
        <Comment />
      </div>
      <div className='p-[16px] border-t-[1px] border-[rgba(255,255,255,0.2)]'>
        <CommentInput myChannelImg={MyChannel} />
      </div>
    </div>
  );
};
export default CommentBox;
