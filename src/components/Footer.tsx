import { HiArrowRight } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer id='footer' className='bg-primary-black'>
      <div className='bg-primary-black text-primary-white pt-8 child:px-7 child:sm:px-12 child:md:px-14 child:lg:px-20 child:xl:px-28 child:lg:pt-28 mt-24 flex flex-col lg:flex-row lg:justify-between lg:items-baseline gap-10  lg:gap-0 text-sm'>
        <div className='max-w-xl md:max-w-full flex flex-col gap-10 font-bold flex-1'>
          <h2 className='text-lg lg:text-3xl text-primary-pink font-normal'>
            Mohanad Alrwaihy
          </h2>
          <p className='text-lg leading-5 lg:hidden'>
            Ambitious to collaborate with brands and people and build your site.
            <a
              href='mileto:mohanad.alrwaihy@gmail.com'
              className='underline block mt-1 md:inline-block'
            >
              mohanad.alrwaihy@gmail.com
            </a>
          </p>
          <form className='hidden lg:block '>
            <label
              className='uppercase before:w-2 before:h-2 before:mr-3  before:bg-primary-white before:rounded-full font-medium before:inline-block text-lg'
              htmlFor='emailInput'
            >
              Contact Mail
            </label>
            <div className='flex relative items-center mt-7 w-full'>
              <input
                type='email'
                name='email'
                placeholder='Email Address'
                disabled
                className='bg-primary-black block w-full focus-visible:outline-none'
              />
              <a href='#'>
                <HiArrowRight className='w-6 h-6' />
              </a>
            </div>
            <hr className='mt-2' />
          </form>
        </div>

        <div className='flex flex-col gap-10 pb-24 flex-1'>
          <form className='lg:hidden'>
            <label
              className='uppercase before:w-2 before:h-2 before:mr-3  before:bg-primary-white before:rounded-full font-medium before:inline-block'
              htmlFor='emailInput'
            >
              Contact Mail
            </label>
            <div className='flex relative items-center mt-3'>
              <input
                type='email'
                name='email'
                placeholder='Email Address'
                disabled
                className='bg-transparent block w-full focus-visible:outline-none'
              />
              <a href='#'>
                <HiArrowRight className='w-6 h-6' />
              </a>
            </div>
            <hr className='mt-2' />
          </form>

          <p className='text-2xl leading-6 hidden lg:block max-w-sm'>
            Ambitious to collaborate with brands and people and build your site.
            <a
              href='mileto:mohanad.alrwaihy@gmail.com'
              className='underline block mt-1 md:inline-block '
            >
              mohanad.alrwaihy@gmail.com
            </a>
          </p>
          <div className='flex flex-col lg:flex-row gap-0 justify-between'>
            <div className='flex flex-col gap-3 lg:gap-5 text-sm lg:text-base'>
              <p className='uppercase font-medium before:w-2 before:h-2 before:lg:w-3 before:lg:h-3 before:mr-3  before:bg-primary-white before:rounded-full before:inline-block'>
                Social
              </p>
              <ul className='child-hover:underline'>
                <li>
                  <a target='_blank' href='https://github.com/MohanadOO'>
                    GitHub
                  </a>
                </li>
                <li>
                  <a target='_blank' href='https://twitter.com/Mohanad_OOO'>
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://www.linkedin.com/in/mohanad-alrwahiy-176aa719b/'
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black/40 py-5 text-center text-xs text-gray-500 flex flex-col lg:flex-row lg:justify-around'>
        <p>
          This Page created by{' '}
          <span className='text-primary-white'>Mohaand ♥</span>
        </p>
      </div>
    </footer>
  )
}
