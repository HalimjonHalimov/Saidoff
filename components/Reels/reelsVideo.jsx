import { useRef, useState } from "react";
// import videoS from '@/public/video/video.mp4'

const videoUrl = "https://youtu.be/RPpolhJy3pU?si=njTIKlOYyxzDuz_D";

export default function ReelsVideo() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef();

  return (
    <div className="relative w-full h-full">
      <video className="w-full h-full object-cover" autoPlay loop >
        <source
          src="/video/video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
