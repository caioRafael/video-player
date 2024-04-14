import { VideoPlayer } from '@/components/VideoPlayer'

export default function Home() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center">
    //   <h1>olá mundo</h1>
    //   <video
    //     className="w-full"
    //     src="blob:https://www.youtube.com/dbdc90ae-ba19-4079-b04e-3d41a5a27fbe"
    //     hidden
    //   />
    //   <canvas className="w-full h-full"></canvas>
    // </div>
    <VideoPlayer />
  )
}
