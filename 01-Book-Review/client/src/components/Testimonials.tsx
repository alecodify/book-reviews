import { FaStar } from 'react-icons/fa';


const Testimonials = () => {
    const starRating = (rating: number) => {
        return Array(rating)
          .fill(0)
          .map((_, i) => <FaStar key={i} className="text-yellow-500" />);
      };

    return (
        <main>
            <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
                            <p className="italic">"BookSphere is my go-to site for book reviews. The community is amazing and the reviews are insightful!"</p>
                            <div className="flex justify-end mt-4">
                                {starRating(5)}
                            </div>
                            <p className="mt-4 text-right font-semibold">- Jane Doe</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
                            <p className="italic">"Thanks to BookSphere, I’ve discovered so many great reads that I wouldn’t have found otherwise."</p>
                            <div className="flex justify-end mt-4">
                                {starRating(5)}
                            </div>
                            <p className="mt-4 text-right font-semibold">- John Smith</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Testimonials