import "./globals.css";

export const metadata = {
  title: "盤匠",
  description: "盤と駒を設計して遊ぶ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
