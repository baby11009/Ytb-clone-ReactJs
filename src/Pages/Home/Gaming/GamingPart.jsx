import { gaming_img } from "../../../Assets/Images";
import { shortList1 } from "../../../Mock Data/shortData";
import { HorizonShorts, VideoRow, GamingRow } from "../../../Component";
import { Link } from "react-router-dom";
import { vidList3, vidList4 } from "../../../Mock Data/videoData";
import { gameList } from "../../../Mock Data/gamesData";

const Layout = ({ data, noBtn, children }) => {
  return (
    <div className='border-b-[1px] border-b-black-0.2'>
      <div className='mt-[24px] flex  items-center justify-between'>
        <div className='flex flex-col '>
          <h1 className='text-[20px] leading-[28px] font-bold t-1-ellipsis'>
            {data?.title}
          </h1>
          {data?.desc && (
            <div className='text-[12px] leading-[18px] text-gray-A t-ellipsis'>
              {data.desc}
            </div>
          )}
        </div>
        {!noBtn && (
          <Link className='text-[14px] leading-[36px] font-[500] text-blue-3E text-nowrap px-[16px] rounded-[18px] hover:bg-[#263850]'>
            Xem tất cả
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};

const GamingPart = ({ openedMenu }) => {
  return (
    <div className='flex justify-center min-h-screen'>
      <div
        className={`w-[214px] xsm:w-[428px] sm:w-[642px] 2md:w-[856px]  
        ${
          openedMenu
            ? "1336:w-[1070px] xl 2xl:w-[1284px]"
            : "2lg:w-[1070px] 1-5xl:w-[1284px]"
        }`}
      >
        <div className='pt-[24px] pb-[4px] flex items-center'>
          <img
            src={gaming_img}
            alt='image'
            className='size-[48px] xsm:size-[72px] rounded-[50%] mr-[16px]'
          />
          <span className='text-[24px] leading-[32px] xsm:text-[36px] xsm:leading-[50px] font-bold'>
            Trò chơi
          </span>
        </div>

        <Layout
          data={{
            title: "Nổi bật",
          }}
          noBtn={true}
        >
          <VideoRow
            containerStyle={"pt-[12px] my-[24px]"}
            showBtn={true}
            width={210}
            marginX={2}
            top={"top-[20%]"}
            thumbRound={"8px"}
          />
        </Layout>
        <Layout
          data={{
            title: "Trò chơi trực tiếp hàng đầu",
            desc: "Được tạo tự động bởi YouTube",
          }}
        >
          <GamingRow width={210} list={gameList} marginX={2} />
        </Layout>
        <Layout
          data={{
            title: "Video thịnh hành",
            desc: "Nổi bật và mới",
          }}
        >
          <VideoRow
            vidList={vidList3}
            containerStyle={"pt-[12px] my-[24px]"}
            showBtn={true}
            width={210}
            marginX={2}
            top={"top-[20%]"}
            thumbRound={"8px"}
          />
        </Layout>
        <HorizonShorts shortList={shortList1} funcBoxPos={"right-[20%]"} />

        <Layout
          data={{
            title: "Video từ các kênh mà bạn đăng ký",
          }}
        >
          <VideoRow
            vidList={vidList4}
            containerStyle={"pt-[12px] my-[24px]"}
            showBtn={true}
            width={210}
            marginX={2}
            top={"top-[20%]"}
            thumbRound={"8px"}
          />
        </Layout>
      </div>
    </div>
  );
};
export default GamingPart;
