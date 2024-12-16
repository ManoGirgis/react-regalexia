import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import WoocommerceConnection from '../../../connections/woocommerce';

const Navigation = (props) => {
    const { data: item, loading, error } = WoocommerceConnection(props.navi);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const [current, setCurrent] = useState(props.current);

    useEffect(() => {
        if (item && item.length > 0) {
            for (let i = 0; i < item.length; i++) {
                if (item[i].id === props.current) {
                    if (i + 1 < item.length) {
                        setNext(item[i + 1]);
                    } else {
                        setNext(null);
                    }
                    if (i - 1 >= 0) {
                        setPrev(item[i - 1]);
                    } else {
                        setPrev(null);
                    }
                    break;
                }
            }
        }
    }, [item, current]);

    useEffect(() => {
        console.log('Next item:', next);
        console.log('Previous item:', prev);
    }, [next, prev]);

    if (loading) {
        return <div>Cargando...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const toprev = () => {
        if (prev) {
            props.left(prev.id);
        }
    };

    const tonext = () => {
        if (next) {
            props.right(next.id);
        }
    };

    return (
        <div className="button-aligner">
            {prev && (
                <div onClick={toprev} className="toPrev">
                    <FaArrowLeft /> {prev.name}
                </div>
            )}
            {next && (
                <div onClick={tonext} className="toNext">
                    <FaArrowRight /> {next.name}
                </div>
            )}
        </div>
    );
}

export default Navigation;
