'use client'

import { useVideo } from '@/context/VideoContext'
import { VideoControls } from './VideoControls'

export function VideoPlayer() {
  const { selectedVideo, updateTime, isExpanded } = useVideo()

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <video
        id="video"
        className="w-full"
        src={selectedVideo?.videoURL}
        hidden
        onTimeUpdate={updateTime}
      />
      <canvas
        data-expand={isExpanded ? 'true' : 'false'}
        id="canvas"
        className="flex w-full h-full data-[expand=true]:w-screen data-[expand=true]:h-screen data-[expand=true]:z-50 data-[expand=true]:absolute top-0 left-0"
      />
      <VideoControls />
      <h1 className="self-start mt-2">{selectedVideo?.title}</h1>
      <p className="self-start mt-2">{selectedVideo?.description}</p>
    </div>
  )
}
