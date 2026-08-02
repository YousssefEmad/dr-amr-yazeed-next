import { useEffect, useState } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && (
        <div className="loader-container">
          <div className="loader" />
        </div>
      )}

      <Header onOpenMobileMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>{children}</main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
