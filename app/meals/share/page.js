import Link from "next/link";

export default function ShareMealPage() {
  return (
    <>
      <h1>Share Meal</h1>
      <p>
        <Link href="./">Back</Link>
      </p>
      <p>
        <Link href="../">To Main Page</Link>
      </p>
    </>
  );
}
