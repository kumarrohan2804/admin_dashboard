import React from 'react';
import Chart from '../../Components/Chart/Chart';
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo';
import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart />
        </div>
    )
}

export default Home
