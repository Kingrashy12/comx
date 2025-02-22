import React from "react";
import { Box, Button } from "../ui";
import Divider from "../ui/Divider";
import { clx } from "@/utils/clx";

type Product = {
  product: string;
  quantity: number;
  bid_price: number;
  offer_price: number;
};

interface ProductTableProps {
  products: Product[];
  map_type: "bid" | "offer";
}

const ProductTable: React.FC<ProductTableProps> = ({ products, map_type }) => {
  return (
    <div className="bg-white rounded w-full flex flex-col shadow-sm h-[352px]">
      <Box itemsCenter fullWidth className="px-4 py-3 border-b-4" between>
        <p className="font-roboto font-medium text-xs text-[#778CA2]">
          Products
        </p>
        <p className="font-roboto font-medium text-xs text-[#778CA2]">
          Quantity
        </p>
        <p className="font-roboto font-medium text-xs text-[#778CA2]">
          {map_type === "bid" ? " Bid Price" : "Offer Price"}
        </p>
        <p className="font-roboto font-medium text-xs text-[#778CA2]"></p>
      </Box>
      <Box column className="overflow-y-auto p-1 gap-1">
        {products.map((product, index) => (
          <React.Fragment key={index}>
            <Box
              itemsCenter
              fullWidth
              between
              className="p-4 cursor-pointer hover:bg-neutral-100 rounded-sm"
            >
              <p className="font-roboto text-sm font-medium text-text">
                {product.product}
              </p>
              <p className="font-roboto text-sm font-medium text-text">
                {product.quantity}
              </p>
              <p
                className={clx(
                  "font-roboto text-sm font-medium text-[#52965E]",
                  map_type === "offer" && "text-[#E55541]"
                )}
              >
                {map_type === "bid"
                  ? product.bid_price.toFixed(2)
                  : product.offer_price.toFixed(2)}
              </p>
              <Button
                variant="outline"
                colorScheme={map_type === "bid" ? "success" : "danger"}
                className="h-[26px]"
              >
                {map_type === "bid" ? "Buy" : "Sell"}
              </Button>
            </Box>
            <Divider />
          </React.Fragment>
        ))}
      </Box>
    </div>
  );
};

export default ProductTable;
