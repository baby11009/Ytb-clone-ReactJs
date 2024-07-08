import { CheckBox, RadioCheckBox } from "../../../../../Component";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RoundCircleIcon } from "../../../../../Assets/Icons";

export const CustomeBox = ({ data }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='my-[12px] flex'>
      <div className='pr-[12px]'>
        <CheckBox checked={checked} setChecked={setChecked} />
      </div>
      <div className='flex flex-col text-[14px] leading-[20px]'>
        <div className='mb-[4px]  font-[500]'>{data?.title}</div>
        <div>
          <span className='text-gray-A'>{data.desc}</span>
          &nbsp;
          {data?.link && <Link className='text-blue-3E'>{data.link}</Link>}
          &nbsp;
          <span className='text-gray-A'>{data.desc2}</span>
          &nbsp;
          {data?.link2 && <Link className='text-blue-3E'>{data.link2}</Link>}
        </div>
      </div>
    </div>
  );
};

export const CustomeRadioBox = ({ data, checked, setChecked }) => {
  return (
    <div className='flex items-center cursor-pointer'>
      <RadioCheckBox id={data?.id} checked={checked} setChecked={setChecked} />
      <div
        className='pl-[16px] text-[14px] leading-[20px] text-gray-A'
        onClick={() => setChecked(data?.id)}
      >
        {data.desc}
      </div>
      {data?.question && (
        <div className='w-[24px] h-[16px] text-gray-A mx-[16px] '>
          <RoundCircleIcon />
        </div>
      )}
    </div>
  );
};
