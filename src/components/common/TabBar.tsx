import {
  AiFillHeart,
  AiFillHome,
  AiFillMessage,
  AiFillProfile,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineProfile,
} from 'react-icons/ai';
import { BiSolidUser, BiUser } from 'react-icons/bi';

const tabs = [
  {
    name: '홈',
    icon: <AiOutlineHome className="defaultIcon" />,
    checkedIcon: <AiFillHome className="checkedIcon" />,
  },
  {
    name: '판매내역',
    icon: <AiOutlineProfile className="defaultIcon" />,
    checkedIcon: <AiFillProfile className="checkedIcon" />,
  },
  {
    name: '관심목록',
    icon: <AiOutlineHeart className="defaultIcon" />,
    checkedIcon: <AiFillHeart className="checkedIcon" />,
  },
  {
    name: '채팅',
    icon: <AiOutlineMessage className="defaultIcon" />,
    checkedIcon: <AiFillMessage className="checkedIcon" />,
  },
  {
    name: '내 계정',
    icon: <BiUser className="defaultIcon" />,
    checkedIcon: <BiSolidUser className="checkedIcon" />,
  },
];

const TabBar = () => {
  return (
    <div className="flex h-[70px] w-full ">
      {tabs.map(({ name, checkedIcon }, index) => (
        <div key={index} className="flex flex-1 flex-col items-center justify-center gap-1 hover:bg-gray-100">
          {checkedIcon}
          <p className="text-[11px] text-blue-500">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
