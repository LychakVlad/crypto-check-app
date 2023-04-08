import React from 'react';

const Heading = ({ search, setSearch, setCurrentPage }) => {
  return (
    <div className="w-full pt-12 pb-8 text-neutral-300 mx-auto text-center mb-6">
      <h1 className="font-bold text-8xl max-lg:text-6xl">Crypto-Check</h1>
      <h2 className="font-semibold text-4xl my-10 max-lg:text-2xl">
        Check the price of your favorite cryptocurrency
      </h2>
      <input
        value={search}
        onClick={(e) => setCurrentPage(1)}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search currency"
        className="p-4 w-full max-w-xl focus:outline-none text-neutral-300 focus:bg-zinc-700 text-4xl max-lg:text-xl rounded bg-zinc-800 transition-colors duration-300 "
      />
    </div>
  );
};

export default Heading;
