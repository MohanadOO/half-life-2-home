import { useLayoutEffect, useRef, useState } from 'react'

export default function HeroVideo() {
  const [playVideo, setPlayVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const dot = useRef<HTMLDivElement>(null)
  const cursorVisible = useRef(true)

  useLayoutEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.addEventListener('mousemove', mouseMoveEvent)
      videoRef.current.addEventListener('mouseenter', mouseEnterEvent)
      videoRef.current.addEventListener('mouseleave', mouseLeaveEvent)
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.removeEventListener('mousemove', mouseMoveEvent)
        videoRef.current.removeEventListener('mouseenter', mouseEnterEvent)
        videoRef.current.removeEventListener('mouseleave', mouseLeaveEvent)
      }
    }
  })

  const toggleCursorVisibility = () => {
    if (dot.current !== null) {
      if (cursorVisible.current) {
        dot.current.style.opacity = '1'
      } else {
        dot.current.style.opacity = '0'
      }
    }
  }

  const mouseEnterEvent = (e: MouseEvent) => {
    if (
      videoRef.current !== null &&
      dot.current !== null &&
      !cursorVisible.current
    ) {
      cursorVisible.current = true
      toggleCursorVisibility()
    }
  }

  const mouseLeaveEvent = () => {
    cursorVisible.current = false
    toggleCursorVisibility()
  }

  const mouseMoveEvent = (e: MouseEvent) => {
    if (
      videoRef.current !== null &&
      dot.current !== null &&
      cursorVisible.current
    ) {
      dot.current.style.top = e.pageY + 'px'
      dot.current.style.left = e.pageX + 'px'
    } else {
      toggleCursorVisibility()
    }
  }

  function handleVideo() {
    if (videoRef.current !== null) {
      if (!playVideo) {
        videoRef.current.muted = false
        videoRef.current.play()
        toggleCursorVisibility()
        return setPlayVideo(true)
      }
      videoRef.current.pause()
      setPlayVideo(false)
    }
  }

  return (
    <>
      {!playVideo && (
        <div
          ref={dot}
          className='hidden md:flex w-28 h-28 bg-primary-white rounded-full pointer-events-none absolute transition-opacity ease-in-out duration-200 uppercase  items-center justify-center translate-x-[-50%] translate-y-[-50%]'
        >
          <p className='font-bold uppercase text-sm mx-8  text-center'>
            Play Video
          </p>
        </div>
      )}

      {!playVideo && (
        <div className='md:hidden w-20 h-20 sm:w-28 sm:h-28 bg-primary-white rounded-full  absolute transition-opacity uppercase flex items-center justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <p className='font-bold uppercase text-xs sm:text-sm mx-8 text-center'>
            Play Video
          </p>
        </div>
      )}

      {!playVideo ? (
        <video
          ref={videoRef}
          onClick={() => setPlayVideo(true)}
          autoPlay
          loop
          muted
          className='h-screen w-full object-cover object-center md:cursor-none'
          src='/half_life_2_trailer.mp4'
        ></video>
      ) : (
        <iframe
          className='h-screen w-full object-cover object-center md:cursor-none'
          src='https://www.youtube.com/embed/ID1dWN3n7q4?autoplay=1&origin'
          title='YouTube video player'
        ></iframe>
      )}
    </>
  )
}
