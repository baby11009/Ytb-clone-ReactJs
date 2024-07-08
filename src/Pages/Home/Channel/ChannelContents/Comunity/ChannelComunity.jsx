import { ComunityCard } from "../../../../../Component";
import { useState, useEffect } from "react";
import { IsEnd, IsTop } from "../../../../../util/scrollPosition";
import { postList1 } from "../../../../../Mock Data/comunityPostData";

const ComunityCards = () => {
  return (
    <div>
      {postList1.map((item) => (
        <ComunityCard data={item} key={item.id} />
      ))}
    </div>
  );
};

const ChannelComunity = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [isEnd, setIsEnd] = useState(false);

  const [isTop, setIsTop] = useState(true);

  const [cardQtt, setCardQtt] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      IsEnd(setIsEnd);
      IsTop(setIsTop);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        IsEnd(setIsEnd);
        IsTop(setIsTop);
      });
    };
  }, []);

  useEffect(() => {
    let timeOut;

    if (isEnd) {
      setIsLoading(true);
      timeOut = setTimeout(() => {
        setCardQtt((prev) => prev + 1);
        setIsLoading(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [isEnd]);

  useEffect(() => {
    if (isTop) {
      setCardQtt(1);
    }
  }, [isTop]);

  return (
    <div className='pt-[24px]'>
      {[...Array(cardQtt)].map((_, index) => (
        <ComunityCards key={index} />
      ))}
      {isLoading && (
        <div className='my-[40px] flex items-center justify-center'>
          <div
            className='w-[40px] h-[40px] rounded-[50px] border-[3px] border-[rgba(255,255,255,0.4)] 
        border-b-[transparent] border-l-[transparent] animate-spin'
          ></div>
        </div>
      )}
    </div>
  );
};
export default ChannelComunity;
