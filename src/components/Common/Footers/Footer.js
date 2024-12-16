import React from 'react';
import { Row, Col } from "antd";

const Footer = () => {
    return (
        <footer className='info-footer'>

            <Row gutter={[40, 48]}>
                <Col xs={{ span: 0 }} lg={{ span: 2 }} />
                <Col xs={{ span: 24 }} lg={{ span: 4 }} className='footer-columns'>
                    <div>
                        <h1 className='colhead'>¿NECESITAS AYUDA?</h1>
                        <a href='https://wa.me/+34640030604?text=Hola%20me%20gustar%C3%ADa%20hacer%20una%20consulta'>Envíanos un mensaje</a><br></br>
                        <a href='/preguntas'>Preguntas frecuentes</a><br></br>
                        <a href='#'>Cambio de fecha</a><br></br>
                        <a href='#'>ERegalo Conjunto</a>
                    </div>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 4 }} className='footer-columns'>
                    <div>
                        <h1 className='colhead'>EXPERIENCIAS</h1>
                        <a href=''>Creativo</a><br></br>
                        <a href=''>Explorador</a><br></br>
                        <a href=''>Científico</a><br></br>
                        <a href=''>Deportista</a>
                    </div>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 4 }} className='footer-columns'>
                    <div>
                        <h1 className='colhead'>EMPRESA</h1>
                        <a href='/aboutus'>Conócenos</a><br></br>
                        <a href=''>Fundaciones</a><br></br>
                        <a href=''>Contacto</a>
                    </div>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 4 }} className='footer-columns'>
                    <div>
                        <h1 className='colhead'>PROFESIONALES</h1>
                        <a href=''>Hazte colaborador</a><br></br>
                        <a href=''>Espacio colaborador</a>
                    </div>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 4 }} className='footer-columns'>
                    <div>  <h1 className='colhead'>LEGAL</h1>
                        <a href=''>Condiciones generales</a><br></br>
                        <a href=''>Aviso legal</a><br></br>
                        <a href=''>Política de privacidad</a><br></br>
                        <a href=''>Política de cookies</a>
                    </div>
                </Col>
                <Col xs={{ span: 0 }} lg={{ span: 2 }} />
            </Row>
        </footer>
    );
}

export default Footer;
