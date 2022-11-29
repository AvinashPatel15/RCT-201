import { useRef, useState, useEffect } from "react";

const useStopwatch = (initialValue = 0) => {
    const [time, setTime] = useState(initialValue);
    const timerId = useRef(null);
    const start = () => {
        if (!timerId.current) {
            timerId.current = setInterval(() => {
                setTime((prevValue) => prevValue + 1);
            }, 1000);
        }
    };
    const pause = () => {
        clearInterval(timerId.current);
        timerId.current = null;
    };
    const reset = () => {
        clearInterval(timerId.current);
        timerId.current = null;
        setTime(0);
    };

    const addSeconds = (count) => {
        setTime((prevValue) => prevValue + count);
    };
    useEffect(() => {
        return reset;
    }, []);

    return {
        time,
        start,
        pause,
        reset,
        addSeconds
    }
};

export default useStopwatch;