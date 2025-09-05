import Branding from "@/components/company/branding";
import CompanyHero from "@/components/company/hero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/company")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <CompanyHero />
      <Branding />
    </>
  );
}
