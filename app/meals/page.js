import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <main>Meal Page</main>
      <p>
        <Link href="/meals/share">Share Page</Link>
      </p>
      <ul>
        <li>
          <Link href="/meals/dish-1">Dish 1</Link>
        </li>
        <li>
          <Link href="/meals/dish-2">Dish 2</Link>
        </li>
        <li>
          <Link href="/meals/dish-3">Dish 3</Link>
        </li>
      </ul>
      <p>
        <Link href="./">Back</Link>
      </p>
    </>
  );
}
