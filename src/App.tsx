import Reviews from './components/Reviews'
import Awards from './components/Awards'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Characters from './components/Characters'
import AboutDeveloper from './components/AboutDeveloper'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className='my-5 mx-5 sm:mx-10 md:mx-14 lg:mx-20 flex flex-col child:my-7 child:lg:my-16 child:xl:my-20 child:scroll-mt-32'>
        <Characters />
        <Reviews />
        <AboutDeveloper />
        <Awards />
      </div>
      <Footer />
    </>
  )
}

export default App
