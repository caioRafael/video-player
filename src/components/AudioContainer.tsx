import { useVideo } from '@/context/VideoContext'
import { Volume, VolumeX, Volume1, Volume2 } from 'lucide-react'
import { useState } from 'react'

export function AudioContainer() {
  const { volume, updateVolume } = useVideo()
  const [isMute, setIsMute] = useState<boolean>(false)

  const [currentVolume, setCurrentVideo] = useState<number>(volume)

  const alterMute = (mute: boolean) => {
    if (mute) {
      setCurrentVideo(volume)
      updateVolume(0)
    } else {
      updateVolume(currentVolume)
    }
    setIsMute(mute)
  }
  return (
    <div className="flex flex-row h-full items-center">
      <button onClick={() => alterMute(!isMute)}>
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
      <div className="flex items-center overflow-hidden">
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
