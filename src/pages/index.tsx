import Loader from "@/components/common/Loader";
import HomeMain from "@/components/home/HomeMain";
import MainLayout from "@/layouts/MainLayout";
import { ReactElement, useState } from "react";

export default function Home() {
  return (
    <main>
      <HomeMain />
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
