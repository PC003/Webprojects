import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((response) => response.json())     // ✅ use response here
      .then((json) => {
        setData(json[currency]);              // ✅ now safe
      })
      .catch((err) => {
        console.error("Error fetching currency:", err);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
