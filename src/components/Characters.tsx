export default function Characters() {
  return (
    <section className='overflow-hidden scroll-mb-72' id='characters'>
      <ul className='flex gap-2 lg:gap-5 child:flex-1 '>
        <li>
          <a
            href='https://half-life.fandom.com/wiki/Gordon_Freeman'
            target='_blank'
            className='[&_h3]:hover:underline'
          >
            <figure className='w-full overflow-hidden shadow-lg rounded-md'>
              <img
                className='w-full max-w-xl aspect-[3/4] lg:aspect-[6/7] object-cover object-center scale-105 lg:hover:scale-100 transition-transform duration-500'
                src='/gordon_freeman.webp'
                alt='example'
              />
            </figure>
            <figcaption className='mt-2 '>
              <h3 className='font-bold text-sm lg:text-lg xl:text-xl'>
                Gordon Freeman
              </h3>
              <p className='w-[90%] mt-2 text-xs lg:text-base leading-4 xl:leading-5 text-primary-black/80'>
                Dr. Gordon Freeman is the main protagonist of the Half-Life
                series. <span className='underline'> Read More</span>
              </p>
            </figcaption>
          </a>
        </li>
        <li>
          <a
            href='https://half-life.fandom.com/wiki/Alyx_Vance'
            target='_blank'
            className='[&_h3]:hover:underline'
          >
            <figure className='w-full overflow-hidden shadow-lg rounded-md'>
              <img
                className='w-full max-w-xl aspect-[3/4] lg:aspect-[6/7] object-cover object-top scale-105 lg:hover:scale-100 transition-transform duration-500'
                src='/alyx_vance.webp'
                alt='example'
              />
            </figure>
            <figcaption className='mt-2'>
              <h3 className='font-bold text-sm lg:text-lg xl:text-xl'>
                Alyx Vance
              </h3>
              <p className='w-[90%] mt-2 text-xs lg:text-base leading-4 xl:leading-5 text-primary-black/80'>
                Alyx Vance is the deuteragonist of Half-Life 2 and its Episodes
                and the titular protagonist of Half-Life: Alyx.{' '}
                <span className='underline'> Read More</span>
              </p>
            </figcaption>
          </a>
        </li>
        <li className='hidden lg:block'>
          <a
            href='https://half-life.fandom.com/wiki/Wallace_Breen'
            target='_blank'
            className='[&_h3]:hover:underline'
          >
            <figure className='w-full overflow-hidden shadow-lg rounded-md'>
              <img
                className='w-full max-w-xl aspect-[3/4] lg:aspect-[6/7] object-cover object-top scale-105 lg:hover:scale-100 transition-transform duration-500'
                src='/wallace_breen.webp'
                alt='example'
              />
            </figure>
            <figcaption className='mt-2'>
              <h3 className='font-bold text-sm lg:text-lg xl:text-xl'>
                Wallace Breen
              </h3>
              <p className='w-[90%] mt-2 text-xs lg:text-base leading-4 xl:leading-5 text-primary-black/80'>
                Dr. Wallace Breen was the former head of Black Mesa, and later
                Earth's Administrator under the Combine.{' '}
                <span className='underline'>Read More</span>
              </p>
            </figcaption>
          </a>
        </li>
      </ul>
      <div className='border-t-[1px] border-primary-black mt-10 lg:mt-32 pt-4 text-xs lg:text-base flex items-center font-medium'>
        <span>01</span>
        <span className='mx-auto'>/05</span>
        <div className='w-3 h-3 rounded-full bg-primary-black ml-auto'></div>
      </div>
    </section>
  )
}
