import MealItem from "./meal-item";
import mealsGridStyles from "./meals-grid.module.css"

export default function MealsGridPage({ meals }) {
  return (
    <ul className={mealsGridStyles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
