import React, { Suspense } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="container max-w-[640px] mx-auto mt-8 p-8 rounded text-blue-chill-900 bg-blue-chill-50 overflow-hidden">
      <Header />
      <Suspense fallback={<div>Loading tasks...</div>}>
        <main>{children}</main>
      </Suspense>
      <Footer />
    </div>
  );
};

export default MainLayout;
