import { ReactNode } from 'react'

type SliderItemType = {
  title: string
  children: ReactNode
}

export default function SliderItem({ title, children }: SliderItemType) {
  return (
    <div className='pt-5 pb-10 lg:pb-32'>
      <h1 className='text-3xl lg:text-4xl font-bold'>{title}</h1>
      <hr className='w-5 mt-4 mb-12 border-primary-black rounded-full' />
      <h3 className='uppercase text-sm md:text-base lg:text-lg font-bold mb-3'>
        {title}
      </h3>
      <p className='text-xs md:text-base lg:text-lg font-medium w-[270px] md:w-[400px]'>
        {children}
        <a className='ml-1 underline' href='#'>
          Read More
        </a>
      </p>
    </div>
  )
}
