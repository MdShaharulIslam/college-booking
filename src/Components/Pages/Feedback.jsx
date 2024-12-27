import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "@fortawesome/fontawesome-free/css/all.css"; // FontAwesome for other icons

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex justify-center mt-2">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-yellow-500 text-xl" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500 text-xl" />}
      {[...Array(emptyStars)].map((_, i) => (
        <AiOutlineStar key={i} className="text-gray-400 text-xl" />
      ))}
    </div>
  );
};

const Feedback = () => {
  const [collegeName, setCollegeName] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim() && collegeName.trim()) {
      // Include college name in the review submission
      setReviews([...reviews, { rating, review, collegeName }]);
      setRating(0);
      setReview("");
      setCollegeName("");
    }
  };

  return (
    <div className="flex justify-center p-4">
      {/* Rating Submission Card */}
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg p-6 bg-white border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Rate and Review</h2>
          <StarRating rating={rating} />
          <div className="flex justify-center mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  {rating >= star ? (
                    <FaStar className="text-yellow-500 text-xl" />
                  ) : (
                    <AiOutlineStar className="text-gray-400 text-xl" />
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* College Name Input */}
          <input
            type="text"
            placeholder="Enter college name"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            className="border p-2 mt-4 w-full rounded"
          />
          {/* Review Input */}
          <input
            type="text"
            placeholder="Enter your review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="border p-2 mt-4 w-full rounded"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Displaying Submitted Reviews */}
      <div className="flex justify-center items-center h-screen flex-col w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet</p>
          ) : (
            reviews.map((reviewItem, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 hover:shadow-xl transition duration-300 max-w-xs w-full text-center"
              >
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold">{reviewItem.rating}</span>
                  <span className="ml-2 text-gray-500 text-sm">Out of 5 stars</span>
                </div>
                <StarRating rating={reviewItem.rating} />
                <p className="text-gray-600 mt-2">{reviewItem.review}</p>
                <p className="text-gray-600 mt-2 font-semibold">College: {reviewItem.collegeName}</p>
                <p className="text-gray-500 mt-4 text-sm">Powered by GatherUp</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
