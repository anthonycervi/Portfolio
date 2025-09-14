import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Anthony Cervi</h1>
        <nav>
          <Link href="/" className="px-3 hover:text-gray-300">Home</Link>
          <Link href="/projects" className="px-3 hover:text-gray-300">Projects</Link>
        </nav>
      </div>
    </header>
  );
}