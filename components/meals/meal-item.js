import Link from 'next/link';
import Image from 'next/image';

import mealItemStyles from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={mealItemStyles.meal}>
      <header>
        <div className={mealItemStyles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={mealItemStyles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={mealItemStyles.content}>
        <p className={mealItemStyles.summary}>{summary}</p>
        <div className={mealItemStyles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}