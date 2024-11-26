
import React from 'react';
import logo from './../../../Images/logo-large.png';
import KidsClusterSinTexto from './../../../Images/aboutus/KidsClusterSinTexto.webp';
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const CopyRights = () => {
    return (
        <footer className='copyrights'>
            <img src={logo} alt="logo" />
            <FaFacebook className='Facebook' />
            <FaInstagram className="Insta" />
            <FaYoutube className='Youtube' />
            <table className='footertable'>
                <tbody>
                    <tr>
                        <td>
                            <p>Formamos parte de:</p>
                        </td>
                        <td>
                            <img src={KidsClusterSinTexto} alt="Kids Cluster"></img>
                        </td>
                    </tr>
                </tbody>
            </table>

        </footer>
    );
}

export default CopyRights;
