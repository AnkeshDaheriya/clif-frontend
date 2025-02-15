import React from "react";

const Data = [
  {
    CardTitle: "1,000+",
    CardHading: "expert authors",
  },
  {
    CardTitle: "70%",
    CardHading: "Trusted by 70% of the Fortune 50",
  },
  {
    CardTitle: "22K",
    CardHading: "business customers across the globe",
  },
  {
    CardTitle: "180",
    CardHading: "countries we do business in today",
  },
  {
    CardTitle: "2K",
    CardHading: "countries we do business in today",
  },
];

const BrandItem = () => {
  return (
    <>
      {Data.map((data, index) => (
        <div className="col-lg-4 col-6" key={index}>
          <div className="text-white justify-content-center ">
            {/* <img src={process.env.PUBLIC_URL + data.image} alt="Brand" /> */}
            <h1 className="text-white">
              {process.env.PUBLIC_URL + data.CardTitle}
            </h1>
            <p className="">{process.env.PUBLIC_URL + data.CardHading}</p>
            {/* process.env.PUBLIC_URL + data.image */}
          </div>
        </div>
      ))}
    </>
  );
};

export default BrandItem;
