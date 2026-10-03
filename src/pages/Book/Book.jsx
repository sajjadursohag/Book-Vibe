import React, { use } from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  //   const data = use(bookPromise);
  //   console.log(data);

    //   console.log(singleBook);
    
    const {
      bookName,
      bookId,
      author,
      image,
      review,
      rating,
      category,
      tags,
      yearOfPublishing,
      publisher,
    } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border p-6 shadow">
        <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-11">
            {tags.map((tag) => (
              <button className="">{tag}</button>
            ))}
          </div>

          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book by: {publisher}</p>

          <div className="border-t-2 border-dashed"></div>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaRegStarHalfStroke />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
