import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-300 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-black">
        <h1 className="text-xl font-bold text-black">
          <Link href="/">Q3</Link>
        </h1>
        <nav className="space-x-4 text-sm">
          <Link href="/projects">Projects</Link>
          <Link href="/ideas">Ideas</Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contacts</Link>
        </nav>
      </div>
    </header>
  );
}
