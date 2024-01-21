"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";

export default function Home() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLatestComments = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/show-photo-comment/3?token=$2y$12$I.VLboReme8.LROhx1ehx.N7y6Mu5vkSD6ySemUJKdhUtTqyJRGMe"
      );
      const data = await response.json();
      setComments(data.comment);
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
              {comments.map((comment) => (
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
