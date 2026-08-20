import Footer from "../../components/Footer";

// Routes that use the standard site footer.
export default function StandardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
