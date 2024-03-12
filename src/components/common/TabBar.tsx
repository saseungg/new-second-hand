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
  { name: '홈', icon: <AiOutlineHome />, checkedIcon: <AiFillHome /> },
  { name: '판매내역', icon: <AiOutlineProfile />, checkedIcon: <AiFillProfile /> },
  { name: '관심목록', icon: <AiOutlineHeart />, checkedIcon: <AiFillHeart /> },
  { name: '채팅', icon: <AiOutlineMessage />, checkedIcon: <AiFillMessage /> },
  { name: '내 계정', icon: <BiUser />, checkedIcon: <BiSolidUser /> },
];

const TabBar = () => {
  return (
    <div className="flex h-[70px] w-full ">
      {tabs.map(({ name, icon }, index) => (
        <div key={index} className="flex flex-1 flex-col items-center justify-center gap-1 hover:bg-gray-100">
          {icon}
          <p className="text-[11px] text-gray-500">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
