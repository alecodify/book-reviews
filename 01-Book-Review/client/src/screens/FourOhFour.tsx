import { useNavigate } from 'react-router-dom';

const FourOhFour = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-4">Oops! Page not found.</p>
        <p className="text-gray-500 mb-6">The page you are looking for might have been moved or deleted.</p>
        <button onClick={() => navigate(-1)} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200" >Go Back</button>
      </div>
    </div>
  )
}

export default FourOhFour;
