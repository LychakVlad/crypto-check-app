import React from 'react';

const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center py-10">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className="my-2 mx-4 text-xl border-2 px-4 py-2 border-neutral-300 hover:bg-neutral-300 hover:text-neutral-800 transition-color duration-300 focus-within:opacity-50"
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
