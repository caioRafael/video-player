'use client'
import { useVideo } from '@/context/VideoContext'
import { convertNumberToTime } from '@/utils/convertNumberToTime'
import { Pause, Play } from 'lucide-react'
import { ProgressBar } from './ProgressBar'
import { AudioContainer } from './AudioContainer'

export function VideoControls() {
  const { totalTime, isPlaying, togglePlay } = useVideo()

  return (
    <div className="flex items-center gap-2 w-full h-10 ">
      <button onClick={togglePlay}>{isPlaying ? <Pause /> : <Play />}</button>
      <AudioContainer />
      <ProgressBar />
      <span>{convertNumberToTime(totalTime)}</span>
    </div>
  )
}
