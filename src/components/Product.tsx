const Product = () => {
  return (
    <div className="flex h-[150px] w-full items-center gap-[15px] border-b px-4">
      <div className="h-[120px] w-[120px] rounded-lg border bg-slate-400"></div>
      <div className="flex h-[120px] flex-col gap-1 pt-1">
        <p className="text-[15px]">파랑 선풍기</p>
        <p className="text-[13px] text-gray-400">역삼 1동 / 2시간 전</p>
        <p className="text-[15px] font-semibold">24,500원</p>
      </div>
    </div>
  );
};

export default Product;
