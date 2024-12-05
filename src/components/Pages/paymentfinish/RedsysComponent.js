/* global getInSiteFormJSON, storeIdOper */

import React, { useEffect } from "react";

const RedsysComponent = () => {
    useEffect(() => {
        // Load the Redsys script
        const script = document.createElement("script");
        script.src = "https://sis-t.redsys.es:25443/sis/NC/sandbox/redsysV3.js";
        script.async = true;
        script.onload = () => {
            console.log("Redsys script loaded successfully.");

            // Initialize the InSite form after the script is loaded
            const pedido = () => "pedido" + Math.floor(Math.random() * 1000 + 1);
            const insiteJSON = {
                id: "card-form",
                fuc: "999008881",
                terminal: "1",
                order: pedido(),
                estiloInsite: "twoRows",
            };

            if (typeof getInSiteFormJSON === "function") {
                getInSiteFormJSON(insiteJSON);
            } else {
                console.error("getInSiteFormJSON is not available.");
            }
        };
        document.body.appendChild(script);

        // Clean up the script and event listener on unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        // Add event listener for the Redsys communication
        const merchantValidationEjemplo = () => {
            alert("Esto son validaciones propias");
            return true;
        };

        const messageHandler = (event) => {
            if (typeof storeIdOper === "function") {
                storeIdOper(event, "token", "errorCode", merchantValidationEjemplo);
            } else {
                console.error("storeIdOper is not available.");
            }
        };

        window.addEventListener("message", messageHandler);

        return () => {
            window.removeEventListener("message", messageHandler);
        };
    }, []);

    return (
        <div>
            <div id="card-form" ></div>
            <form name="datos" className="payment-form">
                <input type="hidden" id="token" name="token" />
                <input type="hidden" id="errorCode" name="errorCode" />
                <button
                    type="button"
                    onClick={() => {
                        const token = document.forms.datos.token.value;
                        const errorCode = document.forms.datos.errorCode.value;
                        alert(`${token} -- ${errorCode}`);
                    }}
                >
                    Ver
                </button>
            </form>
        </div>
    );
};

export default RedsysComponent;
