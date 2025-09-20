import "./globals.css";

export const metadata = {
  title: "Anthony Cervi | UX/UI Designer",
  description: "Portfolio of Anthony Cervi, UX/UI Designer & Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}