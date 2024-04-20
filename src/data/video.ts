export interface IVideo {
  videoURL: string
  imageURL: string
  description: string
  title: string
}

const videos: IVideo[] = [
  {
    videoURL: 'video/luffy-one-piece.mp4',
    imageURL: 'image/luffy-one-piece.png',
    title: 'Luffy',
    description: 'Luffy socando dragão selestial',
  },
  {
    videoURL: 'video/naruto.mp4',
    imageURL: 'image/naruto.png',
    title: 'Naruto',
    description: 'Naruto chegando em Konoha',
  },
  {
    videoURL: 'video/goku.mp4',
    imageURL: 'image/goku.png',
    title: 'Goku',
    description: 'Goku se transformando em super syajin',
  },
]
export default videos
