import Elite from '../components/Elite'
import Hero from '../components/Hero'
import Cards from '../components/Cards' 
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <main className='w-full min-h-screen'>
      <Hero />
      <Elite />
      <Cards />  
      <ContactUs />
    </main>
  )
}

export default Home