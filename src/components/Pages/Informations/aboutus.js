import React, { Component } from 'react'
import { Row, Col } from "antd";
import creativo from './../../../Images/aboutus/creativo.webp';
import explorador from './../../../Images/aboutus/explorador.webp';
import cientifico from './../../../Images/aboutus/cientifico.webp';
import deportista from './../../../Images/aboutus/deportista.webp';
import jump from './../../../Images/aboutus/jump.webp';
import './../../../styles/info.css';

class aboutus extends Component {
    render() {
        return (
            <div>
                <div className='aboutus-container-top'>
                    <h1>REGALEXIA, MUCHO MÁS QUE EXPERIENCIAS</h1>
                    <p>En Regalexia tenemos muy claro la importancia de coleccionar momentos en
                        lugar de seguir acumulando cosas. Por ello, invitamos a todos los padres y tutores
                        a regalar recuerdos memorables a través de vivir emocionantes y divertidas
                        experiencias ideadas para los más pequeños de la casa, para despertar habilidades
                        tales como la tenacidad, la perseverancia, la imaginación y la creatividad.</p>

                    <p><strong>Actividades creadas y dirigidas para que los niños vivan diferentes tipos de experiencias:</strong></p>
                </div>
                <Row>
                    <Col span={6}>
                        <img src={creativo} className='img-aligner'></img>
                        <p id="Creativo">CREATIVO</p>
                    </Col>
                    <Col span={6}>
                        <img src={explorador} className='img-aligner'></img>
                        <p id="Explrador">EXPLORADOR</p>
                    </Col>
                    <Col span={6} >
                        <img src={cientifico} className='img-aligner'></img>
                        <p id="Cientifico">CIENTÍFICO</p>
                    </Col>
                    <Col span={6}>
                        <img src={deportista} className='img-aligner'></img>
                        <p id="Depoortista">DEPORTISTA</p>
                    </Col>

                </Row>
                <div className='aboutus-container-background'>
                    <div className='aboutus-container-bottom'>
                        <h1>REGALEXIA,EL MEJOR REGALO DEL MUNDO</h1>
                        <p>A medida que mi hijo iba creciendo,
                            cada cumpleaños o celebración especial dedicábamos mucho tiempo en buscar el regalo perfecto,
                            aunque no siempre lo lográbamos.
                            Nos preocupaba mucho que, en un mundo tan enfocado en lo material en el que los niños reciben tantísimos regalos,
                            nuestro hijo acabara perdiendo la ilusión y olvidando lo más importante: valorar y disfrutar de cada detalle.
                        </p>
                        <br></br>
                        <p>
                            Una mañana cualquiera decidimos ir de excursión en familia para visitar una pequeña granja.
                            Hacía días que nos hacía falta una escapada al aire libre,
                            de modo que cuando surgió la oportunidad y no lo pensamos dos veces.
                        </p>
                        <br></br>
                        <p>
                            Al terminar el día, David nos dijo con los ojos llenos de emoción
                            “¡Gracias! ¡Hoy me habéis hecho el mejor regalo del mundo!”.
                        </p>
                        <br></br>
                        <p>
                            Disfrutamos mucho del sol, de la naturaleza y aprendimos un poco más sobre la vida de cada animalito. Pero lo mejor de todo fue poder compartir tiempo de calidad, reírnos, descubrir juntos, disfrutar al 100% los unos de los otros y del mundo que nos rodea.
                        </p>
                        <br></br>
                        <p>
                            Por eso, decidimos crear Regalexia, para transformar de verdad el concepto de regalo y unirlo a las experiencias, que son al final las que de verdad nos llenan de ilusión, las que recordamos y atesoramos. Las que nos hacen crecer”.
                        </p>
                        <span>Maria Toral</span> <br></br>
                        <span>Fundadora de Regalexia</span>
                    </div>
                </div>

                <div className="container">
                    <div className="img-holder">
                        <img src={jump} alt="Jump" />
                    </div>
                    <div className="text-holder">
                        <h5>
                            <span>
                                <b>
                                    En REGALEXIA deseamos contribuir a que los niños y las familias tengan momentos felices en sus vidas a través de experiencias y actividades significativas y memorables, promoviendo valores tan importantes y trascendentales como:
                                </b>
                            </span>
                        </h5>
                        <div className="lists">
                            <div className="list">
                                <li>Tenacidad y perseverancia</li>
                                <li>Respeto a los demás y a la naturaleza</li>
                                <li>Potenciar la imaginación y la creatividad</li>
                            </div>
                            <div className="list">
                                <li>Apostar por la convivencia y empatía</li>
                                <li>Promover más tiempo con la familia</li>
                                <li>Disminuir la interacción con las pantallas</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default aboutus
