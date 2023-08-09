import { useState } from "react";

import Delivery from "../../components/Delivery/Delivery";
import Dining_Out from "../../components/Dining_Out/Dining_Out";
import Night_Life from "../../components/Night_Life/Night_Life";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TabOptions from "../../components/TabOptions/TabOptions";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Diff screen */}
      {getCorrectScreen(activeTab)}
      {/* <Delivery /> */}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;

    case "Dining Out":
      return <Dining_Out />;

    case "Night Life":
      return <Night_Life />;

    default:
      return <Delivery />;
  }
};

export default Home;
