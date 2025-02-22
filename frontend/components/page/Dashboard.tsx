"use client";

import React, { useEffect } from "react";
import { Box } from "../ui";
import Navbar from "../layout/Navbar";
import SideBar from "../layout/SideBar";
import LiveMarkets from "../layout/LiveMarkets";
import SubMenu from "../dashboard/SubMenu";
import Filters from "../dashboard/Filters";
import ProductTable from "../dashboard/ProductsCard";
import { products } from "@/data/products";
import Fab from "../ui/Fab";
import { RiMenuSearchLine } from "react-icons/ri";
import { openModal } from "../provider/modal";
import { redirect } from "next/navigation";

const Dashboard = () => {
  useEffect(() => {
    const token = localStorage.getItem("COMX_AUTH");
    const isAuthenticated = !!token;
    if (!isAuthenticated) {
      redirect("/welcome");
    } else {
      return;
    }
  }, []);

  return (
    <Box column fullWidth>
      <Navbar />
      <Box className="gap-3">
        <SideBar />
        <Box fullWidth className="gap-2 mt-2 pr-1">
          <SubMenu />
          <Box column fullWidth className="gap-2">
            <Filters />
            <Box className="gap-4 max-[1024px]:flex-col">
              <ProductTable products={products} map_type="bid" />
              <ProductTable products={products} map_type="offer" />
            </Box>
          </Box>
        </Box>
        <Fab
          className="hidden max-[900px]:flex"
          onClick={() => openModal("sub-menu")}
        >
          <RiMenuSearchLine size={20} />
        </Fab>
      </Box>
      <LiveMarkets />
    </Box>
  );
};

export default Dashboard;
