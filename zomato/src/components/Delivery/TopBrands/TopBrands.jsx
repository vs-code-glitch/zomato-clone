import Slider from "react-slick";
import NextArrow from "../../carousel/nextArrow";
import PrevArrow from "../../carousel/prevArrow";
import "./TopBrands.css";

const brandList = [
  {
    id: 1,
    title: "Chowman",
    time: "29 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6799a847a4bfaee73f5e14aaba8cef83_1638193272.png?output-format=webp",
  },
  {
    id: 2,
    title: "Gupta Brothers",
    time: "16 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/a2531dc570196c0cd9322814eb010d94_1605102324.png?output-format=webp",
  },
  {
    id: 3,
    title: "KFC",
    time: "21 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/560b209a689eefa9feb367b5d5604097_1611382952.png?output-format=webp",
  },
  {
    id: 4,
    title: "Burger King",
    time: "31 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188103.png?output-format=webp",
  },
  {
    id: 5,
    title: "Pizza Hut",
    time: "32 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
  },
  {
    id: 6,
    title: "Subway",
    time: "28 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520462.png?output-format=webp",
  },
  {
    id: 7,
    title: "NIC Ice Creams",
    time: "22 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/b39fb9a7762ce2a19750d676cf5ffcde_1669619210.png?output-format=webp",
  },
  {
    id: 8,
    title: "Azad Hind Dhaba",
    time: "24 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/67fe2ea54f94a7fd5bc27a985c64f0f1_1619104290.png?output-format=webp",
  },
];
const TopBrands = () => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {brandList.map((brand) => (
          <div key={brand.id}>
            <div className="top-brands-cover">
              <img
                className="top-brands-image"
                src={brand.cover}
                alt={brand.time}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopBrands;
