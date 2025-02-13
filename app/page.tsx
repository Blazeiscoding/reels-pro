"use client";

import React, { useEffect, useState } from "react";
import VideoFeed from "./components/VideoFeed";
import { IVideo } from "@/models/Video";
import { apiClient } from "@/lib/api-client";

export default function Home() {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await apiClient.getVideos();
        setVideos(data);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Failed to load videos. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <main className="container mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
        ImageKit ReelsPro
      </h1>

      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading videos...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-lg">{error}</p>
      ) : videos.length > 0 ? (
        <VideoFeed videos={videos} />
      ) : (
        <p className="text-center text-gray-500 text-lg">No videos available.</p>
      )}
    </main>
  );
}
