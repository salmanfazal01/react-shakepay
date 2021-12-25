export const getCryptoPrices = async (callback) => {
  return await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc"
  )
    .then((res) => res.json())
    .then((prices) => {
      if (callback) return callback(prices);
      return prices;
    });
};
