import React from "react";
// import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { UserLayout } from "../../components/layout/UserLayout";
import { PieChart } from "../Chart/PieChart";

export const Dashboard = () => {
  return (
    <div>
      <UserLayout>
        <h3 className='text-center mt-3'>Dashboard</h3>
        <hr />
        <div style={{ width: "40rem", height: "20rem" }}>
          <PieChart />
        </div>
      </UserLayout>
    </div>
  );
};
