import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categoria = () => {
    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        const fetchcategoria = () => {
            axios.get(`${process.env.REACT_APP_WORDPRESS_API_URL}/categories`)
                .then(res => {
                    setCategoria(res.data);
                })
                .catch(error => {
                    console.error('Error fetching Categoria:', error);
                });
        };

        fetchcategoria();

        const intervalId = setInterval(fetchcategoria, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Categorias</h1>
            {categoria.map(cat => (
                <p key={cat.id}>{cat.name}</p>
            ))}

        </div>
    );
}

export default Categoria;
