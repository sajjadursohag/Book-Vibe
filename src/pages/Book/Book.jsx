import React, { use } from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Book = ({ singleBook }) => {
  //   const data = use(bookPromise);
  //   console.log(data);

    //   console.log(singleBook);
    
    const { bookName, author, image, review,rating, category} = singleBook;
  return (
    <div className="card bg-base-100 w-96 shadow-sm border p-6">
      <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
        <img className="h-[166px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            {rating} <FaRegStarHalfStroke />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
