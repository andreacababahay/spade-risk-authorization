import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Risk & Authorization | Spade',
  description:
    'Real-time merchant intelligence for confident authorization decisions. A recreation of the Spade Risk & Authorization page.',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
