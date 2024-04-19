'use client'

import { useVideo } from '@/context/VideoContext'

export function ListVideos() {
  const { list, handleVideo } = useVideo()
  return (
    <ul className="flex items-center flex-col gap-4">
      {list.map((video, index) => (
        <li
          onClick={() => {
            handleVideo(video)
          }}
          key={index}
          className="cursor-pointer flex flex-col gap-5"
        >
          <img
            src={video.imageURL}
            alt={video.description}
            className="w-32 h-32 rounded-lg"
          />
          {video.description}
        </li>
      ))}
    </ul>
  )
}
