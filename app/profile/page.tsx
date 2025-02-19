"use client"
import VideoComponent from '../components/VideoComponent'
import { IVideo } from '@/models/Video';
import { useSession } from "next-auth/react";

interface VideoFeedProps {
  videos: IVideo[];
}


export default function Profile({ videos =[] }: VideoFeedProps) {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const userVideos = videos.filter((video) => video._id === userId);
    return(
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {userVideos.map((video) => (
              <VideoComponent key={video._id?.toString()} video={video} />
            ))}
      
            {userVideos.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-base-content/70">No videos found</p>
              </div>
            )}
          </div>
    )
}