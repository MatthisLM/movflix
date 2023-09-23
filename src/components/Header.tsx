import { Col, Divider, Row } from 'antd';
import { FC } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import MvflxButton from './MvflxButton';
import LangSelector from './LangSelect';



const Header: FC = () => (
    <nav className='bg-gradient-to-b from-black to-transparent text-white absolute top-0 w-screen'>
        <div className='container mx-auto'>
            <Row className='py-8 flex items-center'>
                <Col span={6}>
                    <img src="assets/images/movflix-logo.png" alt=""/>
                </Col>
                <Col span={12}> 
                    <ul className='uppercase font-bold inline-flex w-full justify-around'>
                        <li>Home</li>
                        <li>Movie</li>
                        <li>Tv show</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Contacts</li>
                    </ul>
                </Col>
                <Col span={6}>
                    <div className='flex items-center justify-end'>
                        <span>
                            <BiSearchAlt2 className='text-lg cursor-pointer'/>
                        </span>
                        <Divider type="vertical" plain={false} className='mr-3'/>
                        <LangSelector/>
                        <MvflxButton>SIGN IN</MvflxButton>
                    </div>
                </Col>
            </Row> 
        </div>
    </nav>
);

export default Header;
