import Image from "next/image";
import mealsDetailStyles from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    return {
      title: "Meal not found",
      description: "The requested meal does not exist.",
    };
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  const instructionsHtml = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={mealsDetailStyles.header}>
        <div className={mealsDetailStyles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={mealsDetailStyles.headerText}>
          <h1>{meal.title}</h1>
          <p className={mealsDetailStyles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={mealsDetailStyles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={mealsDetailStyles.instructions}
          dangerouslySetInnerHTML={{ __html: instructionsHtml }}
        />
      </main>
    </>
  );
}
