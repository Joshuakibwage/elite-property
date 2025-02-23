import Elite from '../components/Elite'
import Hero from '../components/Hero'
import Cards from '../components/Cards' 

const Home = () => {
  return (
    <main className='w-full min-h-screen'>
      <Hero />
      <Elite />
      <Cards />  
    </main>
  )
}

export default Home