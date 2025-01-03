import Configutations from "@/components/image-tools/image-generation/Configutations";
import GenerateImages from "@/components/image-tools/image-generation/GenerateImages";
import { fetchModels } from "@/lib/actions/model-actions";
import React from "react";

interface searchParams {
  model_id?: string;
}

const ImageGeneration = async ({
  searchParams,
}: {
  searchParams: Promise<searchParams>;
}) => {
  const model_id = (await searchParams).model_id;

  const { data: userModels } = await fetchModels();

  return (
    <section className="container mx-auto flex-1 grid gap-4 grid-cols-3 overflow-hidden">
      <Configutations userModels={userModels || []} model_id={model_id} />
      <div className="col-span-2 p-4 rounded-xl flex items-center justify-center h-fit">
        <GenerateImages />
      </div>
    </section>
  );
};

export default ImageGeneration;
