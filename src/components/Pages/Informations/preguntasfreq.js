import React, { Component } from 'react';
import { Collapse } from "antd";
import './../../../styles/info.css';

const items2: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Periodo de recaudación',
        children:
            <div>
                <p>
                    <b>
                        ¿Hasta cuándo puedo hacer mi aportación?
                    </b>
                </p>
                <p>
                    <span>
                        Todas las invitaciones tienen una fecha límite. Al acceder al enlace compartido, verás el tiempo restante que queda para participar. Después de la fecha límite, no podrás hacer ninguna aportación desde nuestro sitio web.
                    </span>
                </p>
                <br></br>
                <p>
                    <b>
                        ¿Cuándo recibiré las aportaciones de mis invitados?
                    </b>
                </p>
                <p>
                    <span>
                        Cada vez que un invitado realice una aportación, el anfitrión lo verá reflejado en su “saldo Regalexia”.
                    </span>
                </p>
                <br></br>
                <p>
                    <b>
                        ¿Qué pasa si decido cerrar la invitación antes de que se llegue al objetivo de recaudación?
                    </b>
                </p>
                <p>
                    <span>
                        Si has cerrado la invitación y quieres regresar el dinero a quienes hicieron una aportación, necesitamos que envíes un correo a hola@regalexia.com para gestionarlo.  Si quieres usar ese dinero para comprar una experiencia, sigue los pasos que se indican en la página
                        <a href='http://www.regalexia.com/' className="infos-link">www.regalexia.com</a>
                    </span>
                </p>
                <br></br>
            </div>
    },
    {
        key: '2',
        label: 'Montos y meta de recaudación',
        children: <div>
            <p>
                <b>
                    ¿Qué pasa si el dinero recolectado no es suficiente para comprar el regalo del festejado?
                </b>
            </p>
            <p>
                <span>
                    Si la cantidad recolectada es menor al precio del regalo, el anfitrión es quién decidirá qué hacer con el dinero recolectado: devolverlo a los invitados o usarlo para pagar parcialmente la experiencia.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Cuánto es el mínimo que puedo aportar para el festejado?
                </b>
            </p>
            <p>
                <span>
                    No hay un monto mínimo para participar, cada invitado determina el monto que quiere aportar, de acuerdo a la experiencia que se quiere comprar.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Hay un monto máximo de recaudación?
                </b>
            </p>
            <p>
                <span>
                    El monto máximo dependerá de la experiencia que se quiere comprar. En caso de que se quiera hacer un regalo conjunto para adquirir varias experiencias, se deberá hacer una invitación por experiencia.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Qué pasa si nadie aporta?
                </b>
            </p>
            <p>
                <span>
                    Enviaremos al anfitrión una notificación, sugiriendo enviar nuevamente la invitación. Si nadie participa, el evento se cerrará automáticamente el día de la fecha límite de participación.
                </span>
            </p>
            <br></br>

        </div>
    },
    {
        key: '3',
        label: 'Aportaciones anónimas',
        children: <div>
            <p>
                <b>
                    ¿Mi identidad y el monto de mi aportación pueden ser anónimos?
                </b>
            </p>
            <p>
                <span>
                    Los invitados pueden elegir ser anónimos al hacer su aportación, lo que significa que no podrán hacer un video de felicitación personalizado.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Quién puede ver si se ha hecho alguna aportación?
                </b>
            </p>
            <p>
                <span>
                    Sólo los anfitriones serán notificados cuando alguien haya hecho alguna aportación.
                </span>
            </p>
            <br></br>
        </div>
    },
];
const items1: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Uso de la plataforma y registro',
        children:
            <div>
                <p>
                    <b>
                        ¿Tengo que registrarme para utilizar Regalexia?
                    </b>
                </p>
                <p>
                    <span>
                        Sí, utilizamos el perfil de cada usuario para personalizar de mejor manera el proceso de compra y aportación, sin esta información no podemos saber con exactitud la propiedad de cada movimiento realizado en Regalexia.
                    </span>
                </p>
                <br></br>
                <p>
                    <b>
                        ¿Quién puede usar Regalexia?
                    </b>
                </p>
                <p>
                    <span>
                        Regalexia está pensado especialmente para padres de familia y/o personas mayores de 18 años que quieran comprar una experiencia / actividad de nuestra tienda online y/o quieran hacer una recaudación de dinero para hacer un regalo conjunto.
                    </span>
                </p>
                <br></br>
            </div>
    },
    {
        key: '2',
        label: 'Saldo Regalexia',
        children: <div>
            <p>
                <b>
                    ¿Qué es Saldo Regalexia?
                </b>
            </p>
            <p>
                <span>
                    Es la moneda digital que utilizamos en nuestra tienda para gestionar todas las aportaciones recibidas mediante invitaciones creadas.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Cómo puedo cargar dinero a mi Saldo Regalexia?
                </b>
            </p>
            <p>
                <span>
                    Para cargar saldo en tu cuenta Regalexia, debes recibir una aportación mediante una invitación creada previamente para un regalo conjunto. Además, puedes utilizar tu Saldo Regalexia como segundo método de pago en tus compras.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Mi saldo tiene una vigencia límite?
                </b>
            </p>
            <p>
                <span>
                    No hay límite de tiempo para usar el Saldo Regalexia. Permanecerá activo en la cuenta del usuario y se puede utilizar en cualquier momento o acumular para futuras compras.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Puedo retirar mi Saldo Regalexia?
                </b>
            </p>
            <p>
                <span>
                    El Saldo Regalexia sólo se puede utilizar en nuestra web. Si deseas hacer un retiro, ponte en contacto con nosotros en hola@regalexia.com y dinos el motivo de tu solicitud.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Puedo utilizar mi Saldo Regalexia para comprar cualquier experiencia en la página web?
                </b>
            </p>
            <p>
                <span>
                    Sí, puedes utilizar tu Saldo Regalexia para comprar cualquier experiencia en nuestra página web.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Cómo puedo verificar el Saldo Regalexia de mi cuenta?
                </b>
            </p>
            <p>
                <span>
                    Puedes verificar tu Saldo Regalexia al momento de hacer una compra o en tu perfil en el apartado “Cartera”.
                </span>
            </p>
            <br></br>
        </div>
    },
    {
        key: '3',
        label: 'Información sobre la compra de la experiencia',
        children: <div>
            <p>
                <b>
                    ¿Cómo funciona?
                </b>
            </p>
            <p>
                <span>
                    Para comprar una experiencia, elige una de nuestro amplio catálogo y selecciona la cantidad de entradas que deseas adquirir. Ten en cuenta que algunas experiencias se venden en paquetes. Completa la información solicitada y realiza el pago utilizando uno de los métodos aceptados en nuestro sitio. ¡Es así de fácil!
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Puedo crear una invitación sin tener que comprar una experiencia?
                </b>
            </p>
            <p>
                <span>
                    Si. Simplemente tendrás que registrarte como usuario y seguir todos los pasos que se te indicarán en el proceso de compra.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Cómo puedo crear una invitación?
                </b>
            </p>
            <p>
                <span>
                    En nuestra tienda en línea (www.regalexia.com), cada experiencia tiene un botón “Haz un regalo conjunto”. Al hacer clic en él, podrás crear una invitación para confirmar el regalo seleccionado y establecer una fecha límite para recibir aportaciones. Comparte la invitación por correo electrónico o redes sociales y espera a que tus familiares y amigos contribuyan. ¡Es así de fácil!
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Cómo puedo saber la disponibilidad de la experiencia elegida?
                </b>
            </p>
            <p>
                <span>
                    La mayoría de las experiencias te permiten hacer una pre-reserva en línea, de acuerdo a los días y horarios de la actividad. Si no está disponible y te interesa comprarla, puedes enviarnos un correo a hola@regalexia.com para ayudarte.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Puedo usar Regalexia si me encuentro fuera de España?
                </b>
            </p>
            <p>
                <span>
                    Sí, puedes comprar experiencias,  crear invitaciones y hacer aportaciones desde otros países.
                </span>
            </p>
            <br></br>
        </div>,
    },
    {
        key: '4',
        label: 'Validez de mi experiencia',
        children:
            <div>
                <p>
                    <b>
                        ¿Qué validez tiene la compra de la experiencia?
                    </b>
                </p>
                <p>
                    <span>
                        Las experiencias tienen una validez de 6 meses desde el momento de su compra y/o renovación. Si no la utilizas dentro de dicho periodo, puedes renovarla gratuitamente por 6 meses más desde nuestra web en la sección “Renovar mi experiencia”
                    </span>
                </p>
                <br></br>

            </div>
    },
    {
        key: '5',
        label: 'Formas de pago y costes del servicio',
        children: <div>
            <p>
                <b>
                    ¿Cuáles son las formas de pago aceptadas?
                </b>
            </p>
            <p>
                <span>
                    La compra de experiencias pueden hacerse mediante tarjeta de crédito, de débito, bizum o utilizar el saldo Regalexia. Los invitados pueden hacer una aportación mediante tarjeta de crédito, débito o bizum.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Cuáles son los costos del servicio?
                </b>
            </p>
            <p>
                <span>
                    Utilizar nuestro servicio no tiene ningún coste
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Cómo recibo la compra de la experiencia?
                </b>
            </p>
            <p>
                <span>
                    Una vez pagada la experiencia recibirás un vale con toda la información de tu compra, que tendrás que entregar al proveedor de la experiencia para hacerla válida.
                </span>
            </p>
            <br></br>
        </div>
    },
    {
        key: '6',
        label: 'Paquetes familiares',
        children: <div>
            <p>
                <b>
                    ¿Cómo puedo saber si una entrada es para un solo visitante o si se vende en paquete familiar?
                </b>
            </p>
            <p>
                <span>
                    Antes de agregar una experiencia al carrito de compra, verifica la información en la ficha de la experiencia. Si es un paquete familiar, selecciona el paquete deseado antes de agregarlo al carrito. Si solo es una entrada individual, simplemente agrega la cantidad de entradas que necesites, considera que cada entrada es un acceso para una persona.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    Si solo necesito una entrada individual, ¿puedo comprarla incluso si la experiencia se ofrece solo en paquete familiar?
                </b>
            </p>
            <p>
                <span>
                    Si no está disponible y te interesa comprarla, puedes enviarnos un correo a hola@regalexia.com para ayudarte.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Puedo comprar entradas para un grupo grande si el parque solo vende entradas en paquetes familiares?
                </b>
            </p>
            <p>
                <span>
                    Si no está disponible y te interesa comprarla, puedes enviarnos un correo a hola@regalexia.com para ayudarte.
                </span>
            </p>
            <br></br>
            <p>
                <b>
                    ¿Hay descuentos disponibles para los paquetes familiares?
                </b>
            </p>
            <p>
                <span>
                    Todos los paquetes familiares disponibles en <a href='http://www.regalexia.com' className="infos-link">www.regalexia.com </a> cuentan ya con un descuento en comparación al precio por entrada individual.
                </span>
            </p>
            <br></br>
        </div>
    },
];

class preguntasfreq extends Component {

    render() {

        return (
            <div className='Preguntas-main-container'>
                <h1>Preguntas frecuentes</h1>
                <div>
                    <Collapse items={items1} onChange={this.onChange} />
                </div>

                <h2>Sobre regalo conjunto</h2>

                <div>
                    <Collapse items={items2} onChange={this.onChange} />
                </div>
                <span>¿No encuentras respuesta a tu pregunta?</span>
                <p>Escríbenos via whatsapp:<a href='https://api.whatsapp.com/send/?phone=%2B34640030604&text=Hola+me+gustar%C3%ADa+hacer+una+consulta&type=phone_number&app_absent=0' className="infos-link">+34 640 030 604</a> </p>
            </div>
        )
    }
}

export default preguntasfreq
