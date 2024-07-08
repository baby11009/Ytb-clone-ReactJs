import { useLocation, useParams } from "react-router-dom";
import LeftMenu from "./LeftMenu/LeftMenu";
import DisplayContent from "./Display/DisplayContent";

const SettingPart = () => {
  const location = useLocation();

  const { id } = useParams();

  return (
    <div className='relative'>
      <LeftMenu path={location.pathname} />
      <DisplayContent id={id} />
    </div>
  );
};
export default SettingPart;
