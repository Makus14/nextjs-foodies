import Link from "next/link";

export default function SharePage() {
  return (
    <>
      <main>Share Page</main>
      <p>
        <Link href="./">Back</Link>
      </p>
      <p>
        <Link href="../">To Main Page</Link>
      </p>
    </>
  );
}
