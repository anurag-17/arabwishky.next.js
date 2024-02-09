import React from "react";
import { whiskys } from "@/configs/data";
import WhiskysGrid from "@/components/whisky/WhiskyGrid";

const page = () => {
  return (
    <>
    <WhiskysGrid  whiskys = {whiskys} />
    </>
  )
};

export default page;
