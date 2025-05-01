import Header from "@/components/modules/Home/Header";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default CommonLayout;
