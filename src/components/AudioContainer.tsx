import { useVideo } from '@/context/VideoContext'
import { Volume, VolumeX, Volume1, Volume2 } from 'lucide-react'
import { useState } from 'react'

export function AudioContainer() {
  const { volume, updateVolume } = useVideo()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="flex flex-row h-full items-center">
      <button onClick={() => setIsOpen(!isOpen)}>
        {volume === 0 ? (
          <VolumeX />
        ) : volume < 0.33 ? (
          <Volume />
        ) : volume < 0.66 ? (
          <Volume1 />
        ) : (
          <Volume2 />
        )}
      </button>
      <div
        data-view={isOpen}
        className="flex items-center overflow-hidden data-[view=false]:hidden"
      >
        <input
          type="range"
          min={0}
          max={100}
          value={volume * 100}
          onChange={(e) => updateVolume(Number(e.target.value) / 100)}
        />
      </div>
    </div>
  )
}
