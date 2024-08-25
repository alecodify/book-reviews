import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../layout';
import { Book } from '../type';
import * as api from '../api';

const Details = () => {
  const [book, setBook] = useState<Book | null>(null); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await api.fetchBookByID(id!);
        setBook(response.book);
      } catch (error) {
        setError('Failed to fetch book details.');
      } finally {
        setLoading(false);
      }
    }

    fetchBook();
  }, [id]);

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-center text-xl text-red-500">{error}</div>;
  if (!book) return <div className="text-center text-xl">No book found.</div>;

  return (
    <Layout>
      <div className="min-h-screen w-full justify-center items-center mt-16 flex bg-gray-100 md:p-8 p-0 pt-4">
        <div className="container w-[90vw] md:w-[60vw]">
           <div className="bg-white p-3 rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row">
              <div className='flex flex-col flex-1'>
                <img src={book.coverImage} alt={book.title} className="w-full h-80 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-8" />
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{book.title}</h1>
                <h2 className="text-2xl font-semibold text-gray-600 mb-2">by {book.author}</h2>
                <p className="text-lg text-gray-700 mb-4">ISBN: {book.ISBN}</p>
                <p className="text-lg text-gray-700 mb-4">Genre: {book.genre}</p>
                <p className="text-lg text-gray-700 mb-4">Publication Date: {new Date(book.publicationDate).toLocaleDateString()}</p>
                <p className="text-lg text-gray-700 mb-4">Price: ${book.price.toFixed(2)}</p>
                <p className="text-lg text-gray-700 mb-4">Stock: {book.stock}</p>
                <p className="text-lg text-gray-700 mb-4">{book.description}</p>
              </div>

              <div className="flex-1">
                {book.reviews.length > 0 && (
                  <div className="mt-4 md:mt-2">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2 lg:ml-4">Reviews:</h3>
                    <div className="space-y-4">
                      {book.reviews.map((review) => (
                        <div key={review._id} className="bg-gray-50 p-4 rounded-md shadow-sm">
                          <p className="text-gray-700 font-semibold">{review.user.username}</p>
                          <p className="text-yellow-500">
                            {Array(review.rating).fill('★').join('')}
                            {Array(5 - review.rating).fill('☆').join('')}
                          </p>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
