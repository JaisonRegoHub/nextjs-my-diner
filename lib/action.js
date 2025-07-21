"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title")?.trim(),
    summary: formData.get("summary")?.trim(),
    instructions: formData.get("instructions")?.trim(),
    image: formData.get("image"),
    creator: formData.get("name")?.trim(),
    creator_email: formData.get("email")?.trim(),
  };

  const isValidText = !meal.title || !meal.summary || !meal.instructions || !meal.creator;
  const invalidEmail = !meal.creator_email || !meal.creator_email.includes("@");

  if (isValidText || invalidEmail) {
    return {
      message: "Please fill in all fields with valid information.",
      values: {
        title: meal.title,
        summary: meal.summary,
        instructions: meal.instructions,
        name: meal.creator,
        email: meal.creator_email,
      },
    };
  }

  await saveMeal(meal);
  revalidatePath('/meals', 'layout');
  redirect("/meals");
}
