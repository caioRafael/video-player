'use client'

import { useVideo } from '@/context/VideoContext'

export function ListVideos() {
  const { list, handleVideo } = useVideo()
  return (
    <ul className="flex items-start flex-col gap-4">
      {list.map((video, index) => (
        <li
          onClick={() => {
            handleVideo(video)
          }}
          key={index}
          className="cursor-pointer flex gap-5"
        >
          <img
            src={video.imageURL}
            alt={video.description}
            className="w-16 h-16 rounded-lg"
          />
          <div>
            <h1>{video.title}</h1>
            <p>{video.description}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
