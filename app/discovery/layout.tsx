import DiscoveryFooter from "../../components/DiscoveryFooter";

// The discovery route closes with its own call-to-action footer instead of
// the standard site footer.
export default function DiscoveryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <DiscoveryFooter />
    </>
  );
}
