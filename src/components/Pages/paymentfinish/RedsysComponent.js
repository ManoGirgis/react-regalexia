/* global getInSiteFormJSON, storeIdOper */

// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const RedsysComponent = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { orderId, order } = location.state || {};

//     useEffect(() => {
//         if (!orderId) {
//             console.error("No order information provided.");
//             return;
//         }

//         console.log("Order ID:", orderId);
//         console.log("Order Details:", order);

//         const script = document.createElement("script");
//         script.src = "https://sis-t.redsys.es:25443/sis/NC/sandbox/redsysV3.js";
//         script.async = true;
//         script.onload = () => {
//             console.log("Redsys script loaded successfully.");
//             const pedido = () => "pedido" + Math.floor(Math.random() * 1000 + 1);
//             const insiteJSON = {
//                 id: "card-form",
//                 fuc: "999008881",
//                 terminal: "1",
//                 order: pedido(),
//                 estiloInsite: "twoRows",
//             };

//             if (typeof getInSiteFormJSON === "function") {
//                 console.log("Initializing InSite form...");
//                 getInSiteFormJSON(insiteJSON);
//             } else {
//                 console.error("getInSiteFormJSON is not available.");
//             }
//         };
//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, [orderId]);

//     useEffect(() => {
//         // const messageHandler = (event) => {
//         //     console.log("Payment response received:", event);

//         //     // Example: Check if the payment was successful or failed
//         //     const { token, errorCode } = event.data || {};
//         //     if (token && !errorCode) {
//         //         console.log("Payment successful.");
//         //         navigate("/payment-done", {
//         //             state: { orderId, order, status: "success" },
//         //         });
//         //     } else {
//         //         console.error("Payment failed with errorCode:", errorCode);
//         //         navigate("/payment-done", {
//         //             state: { orderId, order, status: "failure", errorCode },
//         //         });
//         //     }
//         // };

//         window.addEventListener("message", messageHandler);

//         return () => {
//             window.removeEventListener("message", messageHandler);
//         };
//     }, [orderId, navigate]);

//     const msghandler = () => {
//         const token = document.getElementById("token").value;
//         const errorCode = document.getElementById("errorCode").value;

//         alert(`${token} -- ${errorCode}`);
//     };


//     const messageHandler = (event) => {
//         //     const { token, errorCode } = event.data || {};
//         //     if (token && !errorCode) {
//         //         navigate("/payment-done", {
//         //             state: { orderId, order, status: "success" },
//         //         });
//         //     } else {
//         //         navigate("/payment-done", {
//         //             state: { orderId, order, status: "failure", errorCode },
//         //         });
//         //     }
//     };


//     return (
//         <div className="paymentframe">
//             <div id="card-form"></div>
//             {/* <form name="datos">
//                 <input type="hidden" id="token" name="token" />
//                 <input type="hidden" id="errorCode" name="errorCode" />
//                 <button
//                     type="button"
//                     onClick={msghandler}
//                 >
//                     Ver
//                 </button> 
//             </form>*/}
//         </div>
//     );
// };

// export default RedsysComponent;
