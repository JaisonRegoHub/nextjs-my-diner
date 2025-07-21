import Link from "next/link";
import mealsPagesStyles from "./page.module.css";
import MealsGridPage from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();

  return <MealsGridPage meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={mealsPagesStyles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={mealsPagesStyles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={mealsPagesStyles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={mealsPagesStyles.main}>
        <Suspense fallback={<p className={mealsPagesStyles.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
