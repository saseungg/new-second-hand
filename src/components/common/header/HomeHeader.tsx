import { IoIosArrowDown } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

const HomeHeader = () => {
  return (
    <div className="flex h-[55px] w-full items-center justify-between border-b px-4">
      <div className="flex items-center gap-1">
        <p className="text-[17px] font-semibold">역삼 1동</p>
        <IoIosArrowDown size={20} />
      </div>
      <RxHamburgerMenu size={20} />
    </div>
  );
};

export default HomeHeader;
