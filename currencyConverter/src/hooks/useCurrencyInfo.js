import { useState, useEffect } from "react";

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`).then(res => res.json()).then(res => setData(res["rates"])).catch(err => console.error("Error fetching currency data:", err));
    console.log("Currency data fetched:", data);
    }, [])
}