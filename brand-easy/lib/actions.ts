"use server";

export async function generateAIDesign(
  prompt: string,
  mode: string,
  brandName: string,
  aspectRatio: string
): Promise<{ success: boolean; error?: string; imageUrl?: string }> {
  return {
    success: false,
    error: "AI Generation is currently disabled.",
  };
}
