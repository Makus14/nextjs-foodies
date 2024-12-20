import Link from "next/link";

export default function DishPage({ params }) {
  return (
    <>
      <h2>Dish Page</h2>
      <p>{params.slug}</p>
      <p>
        <Link href="./">Back</Link>
      </p>
    </>
  );
}
