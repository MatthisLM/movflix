import { Col, Row } from 'antd';
import { FC } from 'react';


const Header: FC = () => (
    <nav>
        <div className='container mx-auto'>
            <Row>
                <Col span={6}>
                    <img src="assets/images/movflix-logo.png" alt=""/>
                </Col>
                <Col span={12}> ok</Col>
                <Col span={6}></Col>
            </Row> 
        </div>
    </nav>
);

export default Header;
