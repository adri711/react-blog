import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url).then(res => {
            if(!res.ok) {
                throw Error("Could not fetch the data for that resource.");
            }
            return res.json();
        }).then(data => {
            setData(data);
            setPending(false);
            setError(false);
        })
        .catch(e => { setError(e.message); });

    }, []);

    return {data, pending, error};
}

export default useFetch;