/* global getInSiteFormJSON, storeIdOper */

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RedsysComponent = () => {
    const location = useLocation();
    const { orderId, order } = location.state || {};

    useEffect(() => {
        if (!orderId) {
            console.error("No order information provided.");
            return;
        }

        console.log("Order ID:", orderId);
        console.log("Order Details:", order);

        const script = document.createElement("script");
        script.src = "https://sis-t.redsys.es:25443/sis/NC/sandbox/redsysV3.js";
        script.async = true;
        script.onload = () => {
            console.log("Redsys script loaded successfully.");
            const pedido = () => "pedido" + Math.floor(Math.random() * 1000 + 1);
            const insiteJSON = {
                id: "card-form",
                fuc: "999008881",
                terminal: "1",
                order: pedido(),
                estiloInsite: "twoRows",
            };

            if (typeof getInSiteFormJSON === "function") {
                console.log("Initializing InSite form...");
                getInSiteFormJSON(insiteJSON);
                window.location.href = "/payment-success";
            } else {
                console.error("getInSiteFormJSON is not available.");
                window.location.href = "/payment-failure"
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [orderId]);

    const msghandler = () => {
        const token = document.getElementById("token").value;
        const errorCode = document.getElementById("errorCode").value;

        alert(`${token} -- ${errorCode}`);
    }
    return (
        <div className="paymentframe">
            <div id="card-form"></div>
            <form name="datos">
                <input type="hidden" id="token" name="token" />
                <input type="hidden" id="errorCode" name="errorCode" />
                <button
                    type="button"
                    onClick={msghandler}
                >
                    Ver
                </button>
            </form>
        </div>
    );
};

export default RedsysComponent;
