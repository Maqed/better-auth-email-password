import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-3">
      <Link href="/login">LoginPage</Link>
      <Link href="/register">Register</Link>
    </div>
  );
}
