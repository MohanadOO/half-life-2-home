import NewsCard from './NewsCard'

export default function Awards() {
  return (
    <section id='news'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase max-w-[100px]'>
          Game Awards
        </h1>
        <button className='border border-primary-black rounded-full py-2 px-6 uppercase text-xs font-bold self-start'>
          <a href='#'>View All</a>
        </button>
      </div>
      <div className='flex flex-col gap-2 mt-10'>
        <NewsCard
          title={'BAFTA Games Award'}
          desc={'Best Action and Adventure Game'}
          type={'Award'}
          date={'2005'}
          imgURL={'/award_bg_1.webp'}
        />

        <NewsCard
          title={'BAFTA Games Award'}
          desc={'PC'}
          type={'Award'}
          date={'2005'}
          imgURL={'/award_bg_2.webp'}
        />

        <NewsCard
          title={'BAFTA Games Award'}
          desc={'Best Animation'}
          type={'Award'}
          date={'2005'}
          imgURL={'/award_bg_3.webp'}
        />
      </div>
    </section>
  )
}
