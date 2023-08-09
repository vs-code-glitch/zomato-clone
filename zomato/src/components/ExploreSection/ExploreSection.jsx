import ExploreCard from "./ExploreCard/ExploreCard";
import "./ExploreSection.css";

const ExploreSection = ({ restaurants, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {restaurants.map((restaurant, i) => (
          <ExploreCard key={restaurant} restaurant={restaurant} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
