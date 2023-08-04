"use client"
// components/PlanSelector.js
import React, { useState } from 'react';

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    features: ['SD Quality', '1 Device'],
  },
  {
    name: 'Standard',
    price: '$12.99',
    features: ['HD Quality', '2 Devices'],
  },
  {
    name: 'Premium',
    price: '$15.99',
    features: ['Ultra HD Quality', '4 Devices'],
  },
];

const PlanSelector = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Choose your Netflix plan:</h1>
        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border p-4 rounded-lg cursor-pointer ${
                selectedPlan === plan ? 'border-blue-500' : 'border-gray-300'
              }`}
              onClick={() => setSelectedPlan(plan)}
            >
              {selectedPlan === plan && (
                <div className="w-4 h-4 absolute top-0 right-0 -mt-1 -mr-1 bg-blue-500 transform rotate-45"></div>
              )}
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              <p className="text-gray-600 mb-2">{plan.price} / month</p>
              <ul className="list-disc list-inside">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button
          className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 w-full"
          onClick={() => alert(`You selected the ${selectedPlan.name} plan!`)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PlanSelector;
