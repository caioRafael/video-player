'use client'

import { useVideo } from '@/context/VideoContext'

export function ProgressBar() {
  const { totalTime, currentTime, setNewTime } = useVideo()
  return (
    <input
      type="range"
      className="w-full"
      min={0}
      max={totalTime}
      value={currentTime}
      onChange={(e) => setNewTime(Number(e.target.value))}
    />
  )
}
