import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Error, Input } from '../components';
import { ReviewsProps } from '../type';
import { Layout } from '../layout';
import * as api from '../api';

type Book = {
  title: string,
  author: string,
}

const AddReview = () => {
  const [book, setBook] = useState<Book>({ title: '', author: '' });
  const [reviewText, setReviewText] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [rating, setRating] = useState<number>(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      if (id !== null) {
        const response = await api.fetchBookByID(id);
        setBook(response.book);
      }
    }

    fetchBook();
  }, [id])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (reviewText === "" || rating === 0) {
      return setError("All Fields are Required");
    }

    const data: ReviewsProps = {
      comment: reviewText,
      rating,
      bookId: id,
    }

    try {
      const response = await api.addReview(data);

      if (response.status === "Success") {
        setSuccess('Review Added Successfully');
      } else {
        setError("Review doesn't add. Please try again or login first.");
      }

    } catch (error) {
      setError("An error occurred. Please try again.");
    }

  }

  return (
    <Layout>
      <div className="h-[100vh] w-full bg-gray-100 p-4 flex items-center justify-center">
        <form onSubmit={onSubmit} className='bg-white p-6 rounded shadow-lg w-[80vw] md:w-[40vw]'>
          {error && <Error error={error} status='failed' />}
          {success && <Error error={success} status='success' />}
          <Input label='Book Name' readonly={true} classNameLabel='text-black' placeHolder='' name='title' type='text' value={book.title} onChange={() => { }} />
          <Input label='Author Name' readonly={true} classNameLabel='text-black' placeHolder='' name='title' type='text' value={book.author} onChange={() => { }} />

          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="reviewText">Review</label>
            <textarea
              id="reviewText"
              className="shadow resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline bg-white"
              rows={4}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="rating">Rating</label>
            <select id="rating" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline bg-white" value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star} Star{star > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          <Button text='Add Review' type='submit' onClick={() => { }}  className='from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700'/>
          <Link to="/browser" className='w-full text-center flex justify-center items-center mt-4 bg-green-500 text-white py-2 px-2 rounded-full'>Go Back</Link>
        </form>
      </div>
    </Layout>
  )
}

export default AddReview