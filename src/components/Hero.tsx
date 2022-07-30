import HeroVideo from './HeroVideo'

export default function Hero() {
  return (
    <section id='hero_section'>
      <HeroVideo />
      <div className='my-5 mx-5 sm:mx-10 md:mx-14 lg:mx-20 lg:my-10 xl:my-20 2xl:my-24 lg:flex items-start justify-between '>
        <div id='about' className='scroll-mt-24'>
          <h2 className='font-medium text-xl lg:text-2xl xl:text-3xl leading-6 sm:max-w-sm md:max-w-md lg:max-w-lg 3xl:max-w-xl mb-6'>
            Half-Life 2 is a 2004 first-person shooter game developed by Valve.
            It was published by Valve through its distribution service Steam.
          </h2>
          <a
            href='https://en.wikipedia.org/wiki/Half-Life_2'
            target='_blank'
            className=' border border-primary-black rounded-full py-2 px-10 text-xxs uppercase font-bold'
          >
            Read More
          </a>
        </div>
        <h1 className='uppercase text-right  text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold mt-10 lg:mt-0'>
          H<span className='text-orange-400 lowercase'>λ</span>lf-Life 2
        </h1>
      </div>
    </section>
  )
}
