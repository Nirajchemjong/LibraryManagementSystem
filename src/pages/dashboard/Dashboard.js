import React from "react";
// import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { UserLayout } from "../../components/layout/UserLayout";

export const Dashboard = () => {
  return (
    <div>
      <UserLayout>
        <h3 className='text-center mt-3'>Dashboard</h3>
        <hr />
      </UserLayout>
    </div>
  );
};
