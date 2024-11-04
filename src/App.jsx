import ImageSlider from './ImageSlider'
import img1 from './assets/grigorii-shcheglov-tJD9GnYkcvk-unsplash.jpg'
import img2 from './assets/joe-gadd-in6HswOS7ZY-unsplash.jpg'
import img3 from './assets/mariah-hewines-S5avsDFi5OA-unsplash.jpg'
import img4 from './assets/peter-thomas-dfk6AgX8M78-unsplash.jpg'

export default function App() {
  const IMAGES = [{url: img1,alt: "Image One", index: 1}, {url: img2,alt: "Image Two", index: 2},{url: img3,alt: "Image Three", index: 3},{url: img4,alt: "Image Four", index: 4},]

  return (
    <>
     <ImageSlider images={IMAGES}/>
    </>
  )
}