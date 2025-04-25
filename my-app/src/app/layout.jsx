import "./globals.css";
import NavHeader from "@/components/nav";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <NavHeader />
        {children}
      </body>
    </html>
  );
}
