/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { z } from "zod";
import { ImageGenerationFormSchema } from "@/components/image-generation/Configutations";
import { generateImageAction, storeImages } from "@/lib/actions/image-actions";

interface GenerateState {
  loading: boolean;
  images: Array<{ url: string }>;
  error: string | null;
  generateImage: (
    values: z.infer<typeof ImageGenerationFormSchema>
  ) => Promise<void>;
}

const useGeneratedStore = create<GenerateState>((set) => ({
  loading: false,
  images: [],
  error: null,

  generateImage: async (values: z.infer<typeof ImageGenerationFormSchema>) => {
    set({ loading: true, error: null });

    try {
      const { error, success, data } = await generateImageAction(values);
      if (!success) {
        set({ error: error, loading: false });
        return;
      }

      console.log("Data: " + data);

      const dataWithUrl = data.map((url: string) => {
        return { url, ...values };
      });

      set({ images: dataWithUrl, loading: false });

      await storeImages(dataWithUrl);
    } catch (error: any) {
      console.error(error);
      set({
        error: `Failed to generate image! Please try again - Error: ${error.message}`,
        loading: false,
      });
    }
  },
}));

export default useGeneratedStore;
