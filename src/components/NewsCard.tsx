import { HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

type NewsCardType = {
  title: string
  desc: string
  type: string
  date: string
  imgURL: string
}

export default function NewsCard({
  title,
  type,
  date,
  desc,
  imgURL,
}: NewsCardType) {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      href='#'
      className='[&_img]:hover:scale-100 [&_h3]:hover:underline'
    >
      <hr className='border-primary-black mb-5' />
      <div className='flex flex-col md:flex-row gap-5 mb-10'>
        <figure className='w-full max-w-xl md:w-[50%] xl:w-[40%] overflow-hidden'>
          <img
            className='w-full max-w-xl aspect-[16/12] md:aspect-video scale-105 transition-transform duration-500 object-cover object-center'
            src={imgURL}
            alt={`${desc}_img`}
            loading='lazy'
          />
        </figure>
        <div className='flex flex-col flex-1'>
          <h3 className='font-medium tracking-tighter leading-5 text-xl md:text-2xl lg:text-3xl xl:text-4xl '>
            {title}
          </h3>
          <p className='mt-2 font-medium'>{desc}</p>
          <p className='mt-7 flex items-center md:mt-auto uppercase text-xs md:text-sm font-bold'>
            {type}
            <span className='font-normal ml-2'>{date}</span>
            <HiArrowRight className='w-6 h-6 ml-auto block md:hidden' />
          </p>
        </div>
        <HiArrowRight className='w-10 h-10 ml-auto hidden md:block' />
      </div>
    </motion.a>
  )
}
