"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import client from "../utils/axiosHelpers";

export default function Home() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLatestComments = async () => {
    try {
      const response = await client.get("v1/show-photo-comment/3");
      setComments(response.data.comment);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching latest comments:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchLatestComments();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log(comments);
  return (
    <>
      <UserLayout>
        <h2>Comments</h2>
        {loading ? (
          "loading....."
        ) : (
          <div>
            <ul>
              {comments?.map((comment) => (
                <li key={comment.id}>{comment.isi_komentar}</li>
              ))}
            </ul>
          </div>
        )}
      </UserLayout>
    </>
  );
}

// To create routes, you must create new folder, and in the folder add page.js
// example : i want to create profile routes, so i must to create profile folder, and inside profile folder add page.js
