import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Error } from '../components';
import { Layout } from '../layout';
import { useState } from 'react';
import * as api from '../api';

const EditReview = () => {
  const location = useLocation();
  const { reviewId, comment, rating } = location.state || {}; 
  const [editedComment, setEditedComment] = useState<string>(comment || '');
  const [editedRating, setEditedRating] = useState<number>(rating || 0);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const navigate = useNavigate();


  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedComment(e.target.value);
  };

  const handleSaveClick = async () => {
    try {
      const updatedData = {
        comment: editedComment,
        rating: editedRating,
      };

      const response = await api.updateReview(reviewId, updatedData);

      if (response.status === "Success") {
          setSuccess('Review Edited Successfully.');
      }

    } catch (err) {
      setError('Failed to update review.');
    }
  };

  return (
    <Layout>
      <div className="h-[100vh] w-full bg-gray-100 p-4 flex items-center justify-center">
        <div className="flex flex-col shadow-lg rounded-lg bg-white p-6 mb-4 w-[90vw] md:w-[40vw]">
          <h1 className="text-2xl font-bold mb-4">Edit Review</h1>
          {error && <Error error={error} status="failed" />}
          {success && <Error error={success} status="success" />}
          
          <textarea
            value={editedComment}
            onChange={handleCommentChange}
            placeholder="Edit your comment"
            className="w-full px-4 py-2 rounded-lg shadow-md overflow-y-auto no-scrollbar focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
            rows={10} 
          />
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2">Edit Rating:</label>
            <select
              value={editedRating}
              onChange={(e) => setEditedRating(Number(e.target.value))}
              className="px-3 py-2 rounded-md shadow-sm w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 border border-gray-300"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Star{num > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end mt-4">
            <Button text="Save" type="button" onClick={handleSaveClick} className="mr-2 bg-blue-500 text-white hover:bg-blue-600" />
            {success &&  <Button text="Go Back" type="button" onClick={() => {navigate(-1)}} className="mr-2 bg-green-500 text-white hover:bg-green-600" />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditReview;
