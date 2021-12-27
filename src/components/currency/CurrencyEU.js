import React, { useEffect, useState } from "react";

export default function CurrencyEU() {
  const [apiDatas, setApiData] = useState(null);

  useEffect(() => {
    fetch(
      `http://api.exchangeratesapi.io/v1/latest?access_key=9eb57d1a4239c8261f8b8dbe7ef5accb&symbols=UZS`
    )
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []);

  return (
    <p className="searchpage__topCurrencyAmount">
      1 EUR = <span className="UZS">{Math.floor(apiDatas?.rates.UZS)} UZS</span> 
    </p>
  );
}
