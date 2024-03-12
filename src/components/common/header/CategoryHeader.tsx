import { IoIosArrowBack } from 'react-icons/io';


const CategoryHeader = () => {
  return (
    <div className="flex h-[55px] w-full items-center justify-between border-b px-4">
      <div className="flex items-center gap-1">
        <IoIosArrowBack size={20} />
        <p className="text-[17px]">닫기</p>
      </div>

    </div>
  );
};

export default CategoryHeader;
