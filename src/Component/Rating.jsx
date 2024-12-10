import React, { useState } from "react";

const Rating = () => {
  const [reviews, setReviews] = useState([
    { name: "Rahul", stars: 5, review: "Excellent service!" },
    { name: "Ankit", stars: 4, review: "Great experience!" },
    { name: "Neha", stars: 5, review: "Very satisfied!" },
    { name: "Priya", stars: 3, review: "Good but can improve." },
  ]);

  const starReviewMap = {
    1: "Very bad experience.",
    2: "Needs significant improvement.",
    3: "Good but can improve.",
    4: "Great experience!",
    5: "Excellent service!",
  };

  const handleStarClick = (index, starIndex) => {
    const updatedReviews = reviews.map((review, reviewIndex) => {
      if (reviewIndex === index) {
        const newStars = starIndex + 1;
        return {
          ...review,
          stars: newStars,
          review: starReviewMap[newStars],
        };
      }
      return review;
    });
    setReviews(updatedReviews);
  };

  return (
    <>
    <div className="mb-20">
      <div className="font-extrabold text-blue-900 text-3xl my-10 text-center ">
        RATING
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-20 ">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-lg text-center"
          >
            <div className="font-bold text-2xl text-gray-800">
              {review.name}
            </div>

            <div className="text-gray-600 mt-2">{review.review}</div>

            <div className="flex justify-center mt-3">
              {Array(5)
                .fill(0)
                .map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={starIndex < review.stars ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-8 cursor-pointer ${
                      starIndex < review.stars
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    onClick={() => handleStarClick(index, starIndex)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.367 7.29a1 1 0 00.95.69h7.605c.969 0 1.371 1.24.588 1.81l-6.127 4.503a1 1 0 00-.364 1.118l2.366 7.29c.3.921-.755 1.688-1.54 1.118l-6.127-4.503a1 1 0 00-1.175 0l-6.127 4.503c-.784.57-1.838-.197-1.539-1.118l2.366-7.29a1 1 0 00-.364-1.118L2.343 12.717c-.784-.57-.381-1.81.588-1.81h7.605a1 1 0 00.95-.69l2.367-7.29z"
                    />
                  </svg>
                ))}
            </div>
          </div>
        ))}
      </div>
      </div>
        </>
  );
};

export default Rating;
