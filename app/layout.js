import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sydney Deck Builder | Timber, Composite & Pergolas",
  description: "Sydney’s #1 authority for decks and outdoor living. Transparent pricing, clear timelines, and professional project management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
