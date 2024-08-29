import { useState, useEffect } from 'react';
import { Button, Error } from '../components';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../layout';
import { Review } from '../type';
import * as api from '../api';

type User = {
  username: string;
  email: string;
  reviews: Review[];
};

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.fetchLoggedInUser();
        setUser(response.user);
      } catch (err) {
        setError('Failed to fetch user data.');
      }
    };

    fetchUserData();
  }, []);

  const handleDeleteClick = async (reviewId: string) => {
    try {
      await api.deleteReview(reviewId);
      setUser((prevUser) => {
        if (!prevUser) return prevUser;
        const filteredReviews = prevUser.reviews.filter((review) => review._id !== reviewId);
        return { ...prevUser, reviews: filteredReviews };
      });
    } catch (err) {
      setError('Failed to delete review.');
    }
  };

  const toggleExpandReview = (reviewId: string) => {
    setExpandedReviews((prev) => {
      const newExpandedReviews = new Set(prev);
      if (newExpandedReviews.has(reviewId)) {
        newExpandedReviews.delete(reviewId);
      } else {
        newExpandedReviews.add(reviewId);
      }
      return newExpandedReviews;
    });
  };

  if (!user) {
    return <div className="text-center text-xl">Loading profile...</div>;
  }

  return (
    <Layout>
      <div className="min-h-screen mt-14 p-8">
        <div className="">
          <div className='flex flex-col shadow-lg rounded-lg bg-white p-8 mb-4'>
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <p className="text-lg mb-4">Username: {user.username}</p>
            <p className="text-lg mb-4">Email: {user.email}</p>

            {error && <Error error={error} status='failed' />}
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
            {user.reviews.length > 0 ? (
              <>
                {user.reviews.map((review) => (
                  <div key={review._id} className="bg-white p-6 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800">{review.book.title} <span className="text-gray-500">by {review.book.author}</span></h3>
                    <div className="mt-4">
                      <p className="text-gray-600 mb-2">Rating: <span className="text-yellow-500">{Array(review.rating).fill('★').join('')}</span>{Array(5 - review.rating).fill('☆').join('')}</p>
                      <p className="text-gray-700">
                        {review.comment.length > 100 ? (
                          <>
                            {expandedReviews.has(review._id) ? (
                              <div>
                                {review.comment}
                                <button className="text-blue-500 lowercase font-medium" onClick={() => toggleExpandReview(review._id)}>Show Less</button>
                              </div>
                            ) : (
                              <div>
                                {review.comment.slice(0, 100)}...
                                <button className="text-blue-500 lowercase font-medium" onClick={() => toggleExpandReview(review._id)}>Read More</button>
                              </div>
                            )}
                          </>
                        ) : (
                          review.comment
                        )}
                      </p>
                      <div className="flex justify-end mt-4">
                        <Button text="Edit" type='button' onClick={() => { navigate('/edit-review', { state: { comment: review.comment, reviewId: review._id, bookId: review.book._id, rating: review.rating } }) }} className='mr-2 bg-blue-500 text-white hover:bg-blue-600' />
                        <Button text="Delete" type='button' onClick={() => handleDeleteClick(review._id)} className='bg-red-500 text-white hover:bg-red-600' />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p className="text-gray-600 text-center">You haven't posted any reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
