"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { UserLayout } from "./components/layout/UserLayout/page";

const Home = () => {
  return (
    <UserLayout>
      <div>
        <span>Index</span>
      </div>
    </UserLayout>
  );
};

export default Home;
