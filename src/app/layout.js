import './globals.css';

export const metadata = {
  title: 'Anthony Cervi Portfolio',
  description: 'UX/UI Designer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}