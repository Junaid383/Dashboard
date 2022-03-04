

import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/Featuredinfo";
import "./home.css"
import {userData} from "../../dummyData"
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";


function Home() {
  return <div className="home">
      <FeaturedInfo/>
      <Chart data= {userData} name = "Sales Analytics" />
      <div className="homeWidgets">        
        <WidgetSm/>
        <WidgetLg/>
      </div>
  </div>;
}

export default Home;
