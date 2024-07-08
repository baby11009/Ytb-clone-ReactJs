import { useEffect } from "react";
import { scrollToTop } from "../util/scrollCustom";

//  Swiper css
import "swiper/css";

const MainLayOut = ({ children, style }) => {


  useEffect(() => {
    scrollToTop()
  }, []);

  return <div className='bg-black min-h-screen text-white-F1'>{children}</div>;
};
export default MainLayOut;
