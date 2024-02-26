import React, { useState } from "react";

const pricingData = [
  {
    id: 1,
    name: "Basic",
    price: 19.99,
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 2,
    name: "Standard",
    price: 29.99,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 3,
    name: "Premium",
    price: 39.99,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

const PricingSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredPricingData =
    selectedFilter === "all"
      ? pricingData
      : pricingData.filter((plan) => plan.features.includes(selectedFilter));

  return (
    <div>
      <div>
        <label>
          Filter by feature:
          <select
            value={selectedFilter}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Feature 1">Feature 1</option>
            <option value="Feature 2">Feature 2</option>
            <option value="Feature 3">Feature 3</option>
            <option value="Feature 4">Feature 4</option>
            <option value="Feature 5">Feature 5</option>
          </select>
        </label>
      </div>
      <div>
        {filteredPricingData.map((plan) => (
          <div key={plan.id}>
            <h2>{plan.name}</h2>
            <p>${plan.price} per month</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
