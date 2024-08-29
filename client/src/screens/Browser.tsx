import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components';
import { Layout } from '../layout';
import { Book } from '../type';
import * as api from '../api';

const Browser = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [filteredBooks, setfilteredBooks] = useState<Book[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set());
    const [isLoggedIn, setLoggedIn] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await api.fetchAllBooks();
                setBooks(response.books);
                setfilteredBooks(response.books);
                setIsLoading(false);
                const user = localStorage.getItem('userId');
                setLoggedIn(user);
            } catch (error) {
                console.error('Error fetching books:', error);
                setIsLoading(false);
            }
        };
        fetchBooks();
    }, []);

    useEffect(() => {
        const results = books.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setfilteredBooks(results);
    }, [searchTerm, books]);

    const toggleExpandReview = (bookId: string) => {
        setExpandedReviews((prev) => {
            const newExpandedReviews = new Set(prev);
            if (newExpandedReviews.has(bookId)) {
                newExpandedReviews.delete(bookId);
            } else {
                newExpandedReviews.add(bookId);
            }
            return newExpandedReviews;
        });
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gray-100 p-4 mt-12">
                <div className="container mx-auto relative">
                    <Input type='text' placeHolder='Search for books, authors' classNameInput="w-full px-3 py-4 rounded-lg shadow-md focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} label='' name='search' />

                    {isLoading ? (
                        <div className="text-center">
                            <p className="text-xl">Loading books...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                            {filteredBooks.map((book) => (
                                <div key={book._id} className="bg-white p-6 rounded-lg shadow-lg transition transform hover:shadow-xl">
                                    <img
                                        src={book.coverImage}
                                        alt={book.title}
                                        className="w-full h-64 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900 cursor-p" onClick={() => {navigate(`/details/${book._id}`)}}>{book.title}</h3>
                                    <p className="text-gray-600 mb-2">by {book.author}</p>
                                    <div className='flex justify-between items-center'>
                                        <h4 className="text-lg font-semibold mb-2">Reviews:</h4>
                                        {isLoggedIn && <Link to={`/add-review/${book._id}`} className="text-green-500 hover:underline font-medium">Add Review</Link>}
                                    </div>

                                    {book.reviews.length > 0 ? (
                                        <div className="mb-4">
                                            {book.reviews.length > 0 ? (
                                                <div className="mb-4">
                                                    <div className="bg-gray-100 p-3 rounded-md mb-2">
                                                        <p className="text-gray-700 font-semibold">{book.reviews[0].user.username}</p>
                                                        <p className="text-yellow-500">
                                                            {Array(book.reviews[0].rating).fill('★').join('')}
                                                            {Array(5 - book.reviews[0].rating).fill('☆').join('')}
                                                        </p>
                                                        {book.reviews[0].comment.length > 100 ? (
                                                            <>
                                                                {expandedReviews.has(book._id) ? (
                                                                    <div>
                                                                        {book.reviews[0].comment}
                                                                        <button className="text-blue-500 lowercase font-medium" onClick={() => toggleExpandReview(book._id)}>Show Less</button>
                                                                    </div>
                                                                ) : (
                                                                    <div>
                                                                        {book.reviews[0].comment.slice(0, 100)}...
                                                                        <button className="text-blue-500 lowercase font-medium" onClick={() => toggleExpandReview(book._id)}>Read More</button>
                                                                    </div>
                                                                )}
                                                            </>
                                                        ) : (
                                                            book.reviews[0].comment
                                                        )}
                                                    </div>
                                                    {book.reviews.length > 1 && (
                                                        <Link to={`/details/${book._id}`} className="text-blue-600 font-medium hover:underline">{`and ${book.reviews.length - 1} more review(s)`}</Link>
                                                    )}
                                                </div>
                                            ) : (
                                                <p>No reviews are available for this book.</p>
                                            )}
                                        </div>
                                    ) : (
                                        <p className="">No reviews are available for this book.</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div >
        </Layout>
    );
};

export default Browser;
