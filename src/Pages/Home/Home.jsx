import React from "react";
import Chart from "../../Components/Chart/Chart";
import FeaturedInfo from "../../Components/FeaturedInfo/FeaturedInfo";
import WidgetLarge from "../../Components/WidgetLarge/WidgetLarge";
import WidgetSmall from "../../Components/WidgetSmall/WidgetSmall";
import { userData } from "../../dummyData";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
