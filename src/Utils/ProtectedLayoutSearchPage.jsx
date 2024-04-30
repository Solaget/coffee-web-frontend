import React from "react";
import { Navigate, useSearchParams, Outlet } from "react-router-dom";

const ProtectedLayoutSearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  return searchQuery ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedLayoutSearchPage;
