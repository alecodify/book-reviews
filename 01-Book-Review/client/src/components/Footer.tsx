import { FaTwitter, FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 BookSphere. All rights reserved.</p>
        <p className="mt-2">Follow us on:</p>
        <div className="flex flex-col gap-1 items-center justify-center">

          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link to="/" className="flex h-8 w-8 justify-center items-center text-blue-600 bg-gray-800 hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                <FaTwitter className='h-4 w-4 fill-current' />
              </Link>
            </li>
            <li className="ml-4">
              <Link to="/" className="flex h-8 w-8 justify-center items-center text-blue-600 bg-gray-800 hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                <FaGithub className='h-4 w-4 fill-current' />
              </Link>
            </li>
            <li className="ml-4">
              <Link to="/" className="flex h-8 w-8 justify-center items-center text-blue-600 bg-gray-800 hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                <FaFacebookF className='h-4 w-4 fill-current' />
              </Link>
            </li>
            <li className="ml-4">
              <Link to="/" className="flex h-8 w-8 justify-center items-center text-blue-600 bg-gray-800 hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                <FaInstagram className='h-4 w-4 fill-current' />
              </Link>
            </li>
            <li className="ml-4">
              <Link to="/" className="flex h-8 w-8 justify-center items-center text-blue-600 bg-gray-800 hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                <FaLinkedinIn className='h-4 w-4 fill-current' />
              </Link>
            </li>
          </ul>

        </div>

      </div>
    </footer>
  )
}

export default Footer