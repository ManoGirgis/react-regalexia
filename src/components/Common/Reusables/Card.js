import React from 'react';

export default function Card(props) {
    return (
        <li className='card-container product'>
            <div>
                <a key={props.id} onClick={() => props.click(props.id, props.type)}>
                    <img
                        src={props.image}
                        alt={props.imageAlt}
                    />
                </a>
            </div>
            <div className='container-header'>
                <div className='taxonomy_icon'>
                    <a key={props.id} onClick={() => props.click(props.id, props.type)}>
                        <img
                            src="https://regalexia.com/wp-content/uploads/2023/04/creativo-negativo.png"
                            alt={props.imageAlt}
                        />
                    </a>
                </div>
                <div className='product-title'>
                    <a key={props.id} onClick={() => props.click(props.id, props.type)}>{props.title}</a>
                </div>
                <div className='details-product'>
                    <div>
                        <span title="Provincia" className="product-provincia">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                            </svg>
                            <p>Barcelona</p>
                        </span>
                        <span title="Precio" className="product-precio">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <p>Desde {props.text}€</p>
                        </span>
                    </div>
                    <div>
                        <span title="Duración" className="product-duracion">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <p>1:30 horas</p>
                        </span>
                        <span title="Venta de entradas" className="product-entradas">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                            </svg>
                            <p>1 o más</p>
                        </span>
                    </div>
                </div>

            </div>

        </li>
    )
}
