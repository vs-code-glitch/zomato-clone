import { restaurants } from "../../data/restaurant";
import ExploreSection from "../ExploreSection/ExploreSection";
import Filter from "../Filter/Filter";
import "./Delivery.css";
import DeliveryCollections from "./DeliveryCollections";
import TopBrands from "./TopBrands/TopBrands";
const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fa-solid fa-sliders  absolute-center" />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
const restaurantsList = restaurants;

const Delivery = () => {
  return (
    <div className="max-width">
      <Filter filterList={deliveryFilters} />
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        restaurants={restaurantsList}
        collectionName="Delivery Restaurants in Kolkata"
      />
    </div>
  );
};

export default Delivery;
