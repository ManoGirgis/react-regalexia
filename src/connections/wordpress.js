import { useEffect, useState } from "react";
import axios from 'axios';

const WordpressConnection = (required) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storeUrl = process.env.REACT_APP_WORDPRESS_API_URL;

                if (!storeUrl) {
                    throw new Error("Wordpress API credentials not provided.");
                }

                const url = `${storeUrl}${required}?`;
                const response = await axios.get(url);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [required]);

    return { data, loading, error };
};

export default WordpressConnection;
