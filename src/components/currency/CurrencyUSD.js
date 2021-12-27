import React, { useEffect, useState } from "react";
export default function CurrencyUSD() {
  const [newApiData, setNewApiData] = useState(null);
  const FREECURRENCY_API_KEY = "88cd8770-3996-11ec-be2b-3b5d00533ea8";
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://freecurrencyapi.net/api/v2/latest?apikey=${FREECURRENCY_API_KEY}&date_from=2021-10-29&date_to=2021-10-30`
      )
        .then((res) => res.json())
        .then((data) => setNewApiData(data));
    };

    fetchData();
  }, []);

  return (
    <p className="searchpage__topCurrencyAmount">
      1 USD = <span className="UZS"> {Math.floor(newApiData?.data.UZS)} UZS</span>
    </p>
  );
}
