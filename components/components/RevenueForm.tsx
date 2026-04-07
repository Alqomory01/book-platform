"use client"; 

import { useState } from "react";
import { calculateDistribution } from "../utils/revenueSharing";


export default function RevenueForm() {
  const [price, setPrice] = useState(5000);
  const [discount, setDiscount] = useState(0.1);
  const [shares, setShares] = useState({
    author: 40,
    press: 20,
    bookshop: 15,
    galleryManager: 10,
    faculty: 5,
    lecturers: 5,
    systemAdmin: 5,
  });

  const totalPercentage = Object.values(shares).reduce((a, b) => a + b, 0);
  const result = calculateDistribution(price, discount, shares);

  const handleShareChange = (stakeholder: string, value: number) => {
    setShares((prev) => ({ ...prev, [stakeholder]: value }));
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Financial Sharing Formula</h2>

      {/* Price Input */}
      <label className="block mb-2">
        Base Price (₦):
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="border p-2 w-full rounded"
        />
      </label>

      {/* Discount Input */}
      <label className="block mb-2">
        Discount/Markup (%):
        <input
          type="number"
          value={discount * 100}
          onChange={(e) => setDiscount(Number(e.target.value) / 100)}
          className="border p-2 w-full rounded"
        />
      </label>

      {/* Stakeholder Inputs */}
      <h3 className="font-semibold mt-4">Stakeholder Percentages</h3>
      {Object.entries(shares).map(([stakeholder, percentage]) => (
        <label key={stakeholder} className="block mb-2">
          {stakeholder} (%):
          <input
            type="number"
            value={percentage}
            onChange={(e) =>
              handleShareChange(stakeholder, Number(e.target.value))
            }
            className="border p-2 w-full rounded"
          />
        </label>
      ))}

      {/* Validation */}
      <p
        className={`mt-2 font-bold ${
          totalPercentage === 100 ? "text-green-600" : "text-red-600"
        }`}
      >
        Total Allocation: {totalPercentage}%{" "}
        {totalPercentage !== 100 && "(Must equal 100%)"}
      </p>

      {/* Results */}
      <h3 className="font-semibold mt-4">Revenue Distribution</h3>
      <ul className="list-disc pl-6">
        {Object.entries(result).map(([stakeholder, amount]) => (
          <li key={stakeholder}>
            {stakeholder}: ₦{amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
