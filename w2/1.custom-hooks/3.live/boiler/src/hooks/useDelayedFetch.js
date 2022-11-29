import { useState } from "react";

const useDelayedFetch = (apiFn) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState({});

    const execute = async(params) => {
        try {
            setLoading(true);
            let data = await apiFn(params);
            setData(data);
            setSuccess(true)
        } catch (e) {
            setError(e.message);
            setSuccess(false)
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, success, data, setData, exec: execute };
};

export default useDelayedFetch;