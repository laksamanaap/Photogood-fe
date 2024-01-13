"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";

export default function Home() {
  return (
    <>
      <UserLayout>
        <Link href="/profile/tes-sub-routes">
          <span>Go to tes sub routes Page</span>
          <button className="btn btn-primary m-2">Button</button>
        </Link>
      </UserLayout>
    </>
  );
}

// To create routes, you must create new folder, and in the folder add page.js
// example : i want to create profile routes, so i must to create profile folder, and inside profile folder add page.js
