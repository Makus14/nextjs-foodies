import Link from "next/link";

export default function MealDetailsPage({ params }) {
  return (
    <>
      <h1>Meal Details</h1>
      <p>{params.slug}</p>
      <p>
        <Link href="./">Back</Link>
      </p>
    </>
  );
}
