import { TagBox } from "../../../../Component";

const defaultList = [
  {
    id: 1,
    title: "Mới nhất",
  },
  {
    id: 2,
    title: "Phổ biến",
  },
  {
    id: 3,
    title: "Cũ nhất",
  },
];

const TagBlock = ({ tagList, activeIndex, setActiveIndex }) => {
  return (
    <div className='my-[16px]'>
      <TagBox
        tagList={tagList || defaultList}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};
export default TagBlock;
