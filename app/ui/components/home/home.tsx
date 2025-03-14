import Footer from "./footer";
import HomeTabs from "./home-tabs";
import Navbar from "./navbar";

export default function HomePage() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="p-3 mb-16">
          <HomeTabs />
          {/* <MainContent /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
