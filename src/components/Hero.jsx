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

  const upcomingVideoLoad = (currentIndex % totalVideos) + 1
  
  const handleMinivideoClik = () => {
    setHasCliked(true)
    
    setCurrentIndex(upcomingVideoLoad)
  }

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`


  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
        <div>
          <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg opacity-0 scale-90 transition-all duration-300 ease-out hover:opacity-100 hover:scale-100 '>
            <div onClick={handleMinivideoClik} className='origin-center'>
              <video
                ref={nextVdRef}
                src={getVideoSrc(upcomingVideoLoad)}
                loop
                muted
                id='current-video'
                className='size-64 origin-center scale-150 object-cover object-center'
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)} loop
            muted
            id='next-video'
            className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
          className='absolute left-0 top-0 size-full object-cover object-center'/>
        </div>
        <h1 className='special-font hero-heading absolute bottom-5 right-5  text-blue-75'>
          G<b>a</b>ming
        </h1>
        <div className='absolute left-0 top-0 z-40 size-full'>
          <div className='mt-24 px-5 sm:px-10'>
            <h1 className='special-font hero-heading text-blue-100'>
              redifi<b>n</b>e
            </h1>
            <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>Enter the metagame Layer <br />Unleash the Play economi</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
