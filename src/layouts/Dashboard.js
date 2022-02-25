import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCreditApplication from "../pages/CreditApplication/AddCreditApplication";
import CheckCreditApplicationStatus from "../pages/CreditApplication/CheckCreditApplicationStatus";
import ListCreditApplication from "../pages/CreditApplication/ListCreditApplication";
import CustomerList from "../pages/Customer/CustomerList";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export default function Dashboard() {
  return (
    <div>
      <Routes>

        <Route
          exact
          path="/"
          element={<AddCreditApplication/>}
        />
        <Route exact path="/cusstomers" element={<CustomerList/>} />
        <Route
          exact
          path="/creditApplications"
          element={<ListCreditApplication/>}
        />
        <Route
          exact
          path="/addCreditApplication"
          element={<AddCreditApplication/>}
        />
         <Route
          exact
          path="/checkCreditApplicationStatus"
          element={<CheckCreditApplicationStatus/>}
        />
         <Route
          exact
          path="*"
          element={<ErrorPage/>}
        />
      
      
      </Routes>
    </div>
  );
}
