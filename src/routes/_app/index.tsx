import HomeHero from "@/components/home/home-hero";
import Real from "@/components/home/real";
import TargetClients from "@/components/home/target-clients";
import WhatWeDo from "@/components/home/what-we-do";
import WhyApplift from "@/components/home/why-applift";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <HomeHero />
      <WhatWeDo />
      <WhyApplift />
      <TargetClients />
      <Real />
      <div className="mb-[250px]" />
    </>
  );
}
