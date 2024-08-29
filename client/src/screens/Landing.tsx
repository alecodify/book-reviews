import { Link } from 'react-router-dom';
import backgroundImage from '/books.jpg';
import { Features, Footer, Testimonials } from '../components';


const Landing = () => {
  return (
    <main>
        <section className="relative w-full h-screen bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className='absolute inset-0 bg-black bg-opacity-50' />
            <div className='relative z-10 flex flex-col items-center justify-center h-screen text-center text-white px-4'>
                <h1 className='text-5xl md:text-7xl font-bold mb-4'>BookSphere</h1>
                <p className='text-lg md:text-2xl mb-6'>Your Hub for Book Reviews and Recommendations</p>
                <div className='space-x-4 text-white font-bold'>
                    <Link to="/browser" className='px-4 py-2 rounded transition duration-300 bg-blue-500 hover:bg-blue-700'>Browse Reviews</Link>
                    <Link to="/signup" className='px-4 py-2 rounded transition duration-300 bg-green-500 hover:bg-green-700'>Get Started</Link>
                </div>
            </div>
        </section>
        <Features />
        <Testimonials />
        <Footer />
    </main>
  )
}

export default Landing