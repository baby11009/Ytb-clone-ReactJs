import { TagBox } from "../../../Component";


const CategoryPart = ({ categoryList, activeIndex, setActiveIndex }) => {

  return (
    <div className='h-[56px] px-[24px] flex items-center justify-center fixed top-[56px] xl:w-full z-[200] bg-black'>
      <TagBox
        tagList={categoryList}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        responsiveBtn={'xl:hidden'}
      />
    </div>
  );
};
export default CategoryPart;

