import { useState } from "react";
import "./Company.css";

type companyProp = {
  company: {
    name: string;
    revenue: number;
  };
};

export function Company({company}: companyProp) {
  // export function Company({name,revenue}: companyProp) {
  //   const { name, revenue } = company;
//   const [name, setName] = useState(company.name);
//   const [revenue, setRevenue] = useState(company.revenue);

  return (
    <div className="Company">
      <p>{company.name}</p>
      <p>{company.revenue}</p>
    </div>
  );
}
