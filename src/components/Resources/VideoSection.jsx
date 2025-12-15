import React from "react";
import video_1 from "../../assets/gif/video-1.gif";
import video_2 from "../../assets/gif/video-2.gif";

const videos = [
  {
    title: "The Future of Decentralized Finance",
    thumb: "https://plus.unsplash.com/premium_photo-1733342554594-102b8e2d0623?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D",
    gif: video_1,
  },
  {
    title: "Exploring Blockchain Technology",
    thumb: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D",
    gif: video_2,
  },
  {
    title: "Historic Crypto Milestones",
    thumb: "https://picsum.photos/id/1013/400/250",
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
  },
];




export default function VideoSection() {
  return (
    <div className="w-full py-22 pt-10 px-6 md:px-16 bg-gray-100 text-black">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-12">Video</h2>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {videos.map((item, index) => (
          <HoverVideoCard key={index} {...item} />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base hover:bg-neutral-900 transition">
          More Videos on Youtube
        </button>
      </div>
    </div>
  );
}

function HoverVideoCard({ title, thumb, gif }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group relative  overflow-hidden cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail / GIF */}
      <img
        src={isHovered ? gif : thumb}
        alt={title}
        className="w-full h-[250px] object-cover transition-all duration-500"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center scale-100 group-hover:scale-125 transition-all duration-500">
          <svg
            className="w-7 h-7 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <p className="text-center text-sm sm:text-lg font-medium mt-4 px-3">{title}</p>
    </div>
  );
}

