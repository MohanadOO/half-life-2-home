export default function AboutDeveloper() {
  return (
    <section
      className='flex flex-col gap-10 sm:flex-row-reverse justify-between items-center sm:items-center '
      id='about_developer'
    >
      <video
        className='object-cover shadow-lg rounded-sm object-center aspect-[3/4] sm:w-[50%]  sm:max-w-xl'
        src='/highlight.m4v'
        autoPlay
        muted
        loop
      ></video>

      <div className='flex flex-col gap-5 max-w-xl'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-8'>
          Valve Corporation
        </h2>
        <p>
          Valve is an American video game developer, publisher, and digital
          distribution company headquartered in Bellevue, Washington. It is the
          developer of the software distribution platform Steam and the
          franchises Half-Life, Counter-Strike, Portal, Day of Defeat, Team
          Fortress, Left 4 Dead and Dota.
        </p>
        <a
          href='https://en.wikipedia.org/wiki/Valve_Corporation'
          target='_blank'
          className='border border-primary-black rounded-full py-2 px-8 uppercase text-xs font-bold self-start mt-3 sm:mt-5 md:mt-10 lg:mt-14 xl:mt-18'
        >
          About Us
        </a>
      </div>
    </section>
  )
}
