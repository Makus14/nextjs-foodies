import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <h1>Meal Page</h1>
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
