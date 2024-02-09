import CocktailsGrid from "@/components/coctails/CoctailsGrid";
import React from "react";
import { cocktails } from "@/configs/data";

const page = () => {
  return (
    <>
    <CocktailsGrid  cocktails = {cocktails} />
    </>
  )
};

export default page;
