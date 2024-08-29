import { FaBook, FaUsers, FaRegStar } from 'react-icons/fa';

const Features = () => {
    return (
        <main>
            <section className="py-12 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Why Choose BookSphere?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
                            <div className="flex items-center mb-4">
                                <FaBook className="text-blue-500 text-3xl mr-3" />
                                <h3 className="text-xl font-semibold">Extensive Book Database</h3>
                            </div>
                            <p>Access reviews of thousands of books across all genres, from fiction to non-fiction, classics to modern bestsellers.</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
                            <div className="flex items-center mb-4">
                                <FaUsers className="text-green-500 text-3xl mr-3" />
                                <h3 className="text-xl font-semibold">User-Driven Reviews</h3>
                            </div>
                            <p>Read genuine reviews from fellow readers and share your own thoughts on the books you love.</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
                            <div className="flex items-center mb-4">
                                <FaRegStar className="text-yellow-500 text-3xl mr-3" />
                                <h3 className="text-xl font-semibold">Personalized Recommendations</h3>
                            </div>
                            <p>Get book recommendations tailored to your reading preferences and discover new favorites.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Features