import { useLayoutEffect, useRef, useState } from 'react'
import SliderItem from './SliderItem'

export default function Reviews() {
  const [dotStyle, setDotStyle] = useState(false)

  const mouseDown = useRef(false)
  const startScroll = useRef(0)
  const scrollLeft = useRef(0)

  const reviewsRef = useRef<HTMLDivElement>(null)
  const dot = useRef<HTMLDivElement>(null)

  const cursorVisible = useRef(true)

  useLayoutEffect(() => {
    if (reviewsRef.current !== null) {
      reviewsRef.current.addEventListener('mousemove', mouseMoveEvent)
      reviewsRef.current.addEventListener('mouseenter', mouseEnterEvent)
      reviewsRef.current.addEventListener('mouseleave', mouseLeaveEvent)
      reviewsRef.current.addEventListener('mousedown', handleDragReviews)
      reviewsRef.current.addEventListener('mouseup', handleDragReviews)
    }
    return () => {
      if (reviewsRef.current !== null) {
        reviewsRef.current.removeEventListener('mousemove', mouseMoveEvent)
        reviewsRef.current.removeEventListener('mouseenter', mouseEnterEvent)
        reviewsRef.current.removeEventListener('mouseleave', mouseLeaveEvent)
        reviewsRef.current.removeEventListener('mousedown', handleDragReviews)
        reviewsRef.current.removeEventListener('mouseup', handleDragReviews)
      }
    }
  })

  const toggleCursorVisibility = () => {
    if (dot.current !== null) {
      if (cursorVisible.current) {
        dot.current.style.opacity = '1'
      } else {
        dot.current.style.opacity = '0'
        mouseDown.current = false
        setDotStyle(false)
      }
    }
  }

  const mouseEnterEvent = () => {
    if (
      reviewsRef.current !== null &&
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
      reviewsRef.current !== null &&
      dot.current !== null &&
      cursorVisible.current
    ) {
      dot.current.style.top = e.pageY + 'px'
      dot.current.style.left = e.pageX + 'px'

      if (mouseDown.current) {
        const x = e.pageX - reviewsRef.current.offsetLeft
        const moveBy = (x - startScroll.current) * 3
        reviewsRef.current.scrollLeft = scrollLeft.current - moveBy
      }
    } else {
      toggleCursorVisibility()
    }
  }

  function handleDragReviews(e: MouseEvent) {
    if (reviewsRef.current !== null) {
      if (e.type === 'mousedown') {
        setDotStyle(true)
        startScroll.current = e.pageX - reviewsRef.current.offsetLeft
        scrollLeft.current = reviewsRef.current.scrollLeft
        return (mouseDown.current = true)
      }
      setDotStyle(false)
      return (mouseDown.current = false)
    }
  }

  return (
    <section id='reviews' className='md:select-none'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase'>
        Reviews
      </h1>

      <div
        ref={dot}
        className={`hidden md:flex w-28 h-28 bg-primary-pink rounded-full pointer-events-none absolute transition-opacity uppercase  items-center justify-center translate-x-[-50%] translate-y-[-50%] opacity-0 ${
          dotStyle
            ? 'scale-75 after:w-0 after:h-0 after:absolute after:right-0 after:translate-x-10  after:border-t-[15px] after:border-b-[15px] after:border-transparent after:border-l-primary-pink after:border-l-[15px] before:w-0 before:h-0 before:absolute before:left-0 before:-translate-x-10  before:border-t-[15px] before:border-b-[15px] before:border-transparent before:border-r-primary-pink before:border-r-[15px]'
            : ''
        } `}
      >
        <p className='font-bold uppercase text-sm mx-8  text-center'>
          {dotStyle ? '' : 'Drag'}
        </p>
      </div>

      <div
        ref={reviewsRef}
        className='flex my-10 w-full gap-8 sm:gap-12 overflow-x-auto lg:scrollbar-thumb-primary-black lg:scrollbar-track-gray-200 lg:scrollbar-thin scroll-smooth md:cursor-none'
        id='slider'
      >
        <SliderItem title={'IGN'}>
          Simply a masterpiece -- a work of art in the genre. Not only does it
          engage the mind with mysterious happenings, vagaries, and mostly
          intelligent dialogue, but also captures the senses with a superb
          visual style made possible by brilliant technology.
        </SliderItem>
        <SliderItem title={'PC Gamer'}>
          History in the making. It raises the bar for interactive
          entertainment, and then uses that bar to club all other games into
          submission...Valve has forged the framework for the next generation of
          games.
        </SliderItem>
        <SliderItem title={'GamePro'}>
          The way things fly, catch fire, and fall not only carries consequences
          that add weight to your war of the worlds, but also creates situations
          that reward guile, guts, and instinct... Everything about Half-Life 2
          is remarkable.
        </SliderItem>
        <SliderItem title={'CPUGamer'}>
          Nothing less than a revolution in the gaming industry that will keep
          gamers busy for years to come, just as the original did.
        </SliderItem>
        <SliderItem title={'GameSpy'}>
          From its opening moments to its spectacular closing sequences,
          Half-Life 2 assaults you with a variety of gameplay styles and
          memorable moments, all executed with amazing precision.
        </SliderItem>
      </div>
    </section>
  )
}
