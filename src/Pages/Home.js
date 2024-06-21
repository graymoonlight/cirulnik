import React from 'react';
import { Link } from 'react-router-dom';
import CitySelector from '../Components/CitySelector';
import '../Styles/Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-start_container-background1'>
                <div className='home-start_container-text'>
                    <h3>
                        Lorem ipsum
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                </div>
                <div className='home-start_container'>
                    <button className='start_btn'>
                        <h5>
                            ПРИСТУПИТЬ К ОБУЧЕНИЮ
                        </h5>
                    </button>
                </div>
                <div className='home-start_container-background2'>
                </div>
            </div>
            <div className='home-vacationSearch_container'>
                <h1 className='vacation'>ВАКАНСИИ</h1>
                <p className='vacation-descrip'>Актуальные вакансии в салонах ЦирюльникЪ</p>
                <div className='home-vacationSearch_container-location'>
                    <div className='location-ico'>
                    </div>
                    <CitySelector />
                </div>
                <div className='home-vacationSearch_container-job'>
                    <div className='job'>
                        <h5 className='vacation_name'>Женский парикмахер</h5>
                        <li className='locate'>Советский проспект, 2а</li>
                        <Link to='/vacation' className='stud_btn'><p>Пройти обучение</p></Link>
                    </div>
                    <div className='job'>
                        <h5 className='vacation_name'>Мужской парикмахер</h5>
                        <li className='locate'>Советский проспект, 2а</li>
                        <Link to='/vacation' className='stud_btn'><p>Пройти обучение</p></Link>
                    </div>
                    <div className='job'>
                        <h5 className='vacation_name'>Администратор</h5>
                        <li className='locate'>Советский проспект, 2а</li>
                        <Link to='/vacation' className='stud_btn'><p>Пройти обучение</p></Link>
                    </div>
                    <div className='job'>
                        <h5 className='vacation_name'>Промоутер</h5>
                        <li className='locate'>Советский проспект, 2а</li>
                        <Link to='/vacation' className='stud_btn'><p>Пройти обучение</p></Link>
                    </div>
                    <div className='job'>
                        <h5 className='vacation_name'>Мастер маникюра</h5>
                        <li className='locate'>Советский проспект, 2а</li>
                        <Link to='/vacation' className='stud_btn'><p>Пройти обучение</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
