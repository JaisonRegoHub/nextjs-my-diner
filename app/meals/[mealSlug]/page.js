import Image from "next/image";
import mealsDetailStyles from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default async function MealDetailPage({ params }) {
  const { mealSlug } = await params;
  const meal = getMeal(mealSlug);

	if (!meal) {
		notFound();
	}

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

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
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
