type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex w-full justify-center bg-blue-50 bg-cover lg:bg-[url('/assets/bg.webp')] lg:bg-cover">
      <div className="hidden h-screen w-[500px] flex-col gap-14 py-10 lg:flex">
        <div className="flex items-center gap-[6px]">
          <img src="/assets/logo.png" className="w-7" />
          <span className="text-sm text-blue-500 ">Second-Hand</span>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">우리 동네 중고 직거래 마켓</h2>
          <p>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</p>
        </div>
      </div>
      <main className="left-[50vw] h-full min-h-screen w-full max-w-[500px] bg-white shadow-xl">
        {children}
      </main>
    </div>
  );
};

export default Layout;
