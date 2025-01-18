import Link from "next/link";

export default function Home() {
  return (
    <div className="   text-center ">
      Buy my new games
      <Link href="/pages/products"> Click me</Link>
    </div>
  );
}
