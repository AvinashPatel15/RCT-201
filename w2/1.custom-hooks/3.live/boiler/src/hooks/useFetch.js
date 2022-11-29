import { useEffect, useState } from "react";

const useFetch = (apiFn) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const execute = async() => {
        try {
            setLoading(true);
            let data = await apiFn();
            setData(data);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        execute();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { loading, error, data, setData, refresh: execute };
};

export default useFetch;