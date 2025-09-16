import React from 'react';

function Video({ url, title,thumbnail }) {
  const urlObj = new URL(thumbnail);
  const videoid = urlObj.searchParams.get("v");
  

  let thumb = "";

  if (videoid) {
    // 🎥 Normal video
    thumb = `https://img.youtube.com/vi/${videoid}/sddefault.jpg`;
  } 
  else{
     thumb = "https://www.gstatic.com/youtube/img/branding/favicon/yt_logo_mono_dark.png";
  }

  return (
    <div className="flex items-center gap-4 p-2 mr-2.5 mb-2.5 rounded-2xl shadow-md bg-[#ffffff] hover:shadow-lg transition">
      {/* Thumbnail */}
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={thumb}
          alt="thumbnail"
          className="w-48 h-28 object-cover rounded-xl"
        />
      </a>

      {/* Title */}
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        
      </div>
    </div>
  );
}

export default Video;
