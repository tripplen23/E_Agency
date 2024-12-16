import Configutations from "@/components/image-generation/Configutations";
import GenerateImages from "@/components/image-generation/GenerateImages";
import React from "react";

const ImageGeneration = () => {
  return (
    <section className="container mx-auto flex-1 grid gap-4 grid-cols-3 overflow-hidden">
      <Configutations />
      <div className="col-span-2 p-4 rounded-xl flex items-center justify-center h-fit">
        <GenerateImages />
      </div>
    </section>
  );
};

export default ImageGeneration;
