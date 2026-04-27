import { Outlet } from "react-router-dom";
import TickerTape from "@/components/TickerTape";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TickerTape />
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      {/* <WhatsAppButton /> */}
      <Footer />
    </div>
  );
};

export default MainLayout;
