import { useEffect, useState } from "react";

function useCurrencyInfo(currencyCode) {
    const [currencyInfo, setCurrencyInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyInfo = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyCode}`);
                const data = await response.json();
                setCurrencyInfo(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (currencyCode) {
            fetchCurrencyInfo();
        }
    }, [currencyCode]);

    return { currencyInfo };
}

export default useCurrencyInfo; 