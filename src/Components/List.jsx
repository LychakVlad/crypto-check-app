import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import cn from 'classnames';

const List = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false&locale=en`
      );
      setCoins(res.data);
      setLoading(false);
    };

    fetchCoins();
  }, []);

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoin = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=" bg-zinc-800 rounded-xl px-10 max-w-screen-xl mx-auto text-2xl text-neutral-300">
      {currentCoin.map(
        ({
          market_cap_rank,
          name,
          symbol,
          current_price,
          market_cap_change_percentage_24h,
          image,
        }) => (
          <div className="flex flex-col" key={market_cap_rank}>
            <div className="grid  grid-cols-6 items-center p-6 max-h-20 border-b-neutral-300 border-b-2">
              <img
                src={image}
                alt="icon"
                style={{ width: 40 }}
                className="flex items-center"
              />
              <div>{market_cap_rank}</div>
              <div>{name}</div>
              <div>{symbol.toUpperCase()}</div>
              <div>{current_price}$</div>
              <div
                className={cn('text-green-600', {
                  'text-red-600': market_cap_change_percentage_24h < 0,
                })}
              >
                {market_cap_change_percentage_24h}
              </div>
            </div>
          </div>
        )
      )}
      <Pagination
        coinsPerPage={coinsPerPage}
        totalCoins={coins.length}
        paginate={paginate}
      />
    </div>
  );
};

export default List;
