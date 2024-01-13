"use client";
import Image from "next/image";
import { UserLayout } from "./components/layout/UserLayout/page";

const Home = () => {
  return (
    <UserLayout>
      <div>
        <span>Index</span>
        <button className="btn btn-primary m-2">Button</button>
      </div>
      <p className="home__example">home example class</p>{" "}
      {/* Example sass implementation*/}
    </UserLayout>
  );
};

export default Home;
