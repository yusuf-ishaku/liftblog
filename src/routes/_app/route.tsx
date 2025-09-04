import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navbar />
      <main className="w-full px-[80px] mt-[32px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
