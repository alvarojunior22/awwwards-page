import React, {useState, useRef} from 'react'

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasclicked, setHasCliked] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)

  const totalVideos = 4

  const nextVdRef = useRef(null)

  const handleVideoLoad = () => {
   setLoadedVideos(prev => prev + 1)
 }

  const handleMinivideoClik = () => {
    setHasCliked(true)
    
    setCurrentIndex(prev => prev + 1)
  }

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`


  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
        <div>
          <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
            <div onClick={handleMinivideoClik} className='origin-center'>
              <video
                ref={nextVdRef}
                src={getVideoSrc((currentIndex % totalVideos) + 1)}
                loop
                muted
                id='current-video'
                className='size-64 origin-center scale-150 object-cover object-center'
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
