// src/app/page.js
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center bg-gray-50">
        <h1 className="text-6xl font-bold mb-6 text-gray-900">Coming Soon</h1>
        <p className="text-xl text-gray-700 mb-4">
          Anthony Cervi&apos;s Portfolio is on the way.
        </p>
        <p className="text-gray-500">
          Check back soon for my full UX/UI portfolio and projects.
        </p>
      </main>
      <Footer />
    </div>
  );
}