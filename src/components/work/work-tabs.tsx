import project1 from "@/assets/images/project1.png";
import project2 from "@/assets/images/project2.png";
import project3 from "@/assets/images/project3.png";
import project4 from "@/assets/images/project4.png";
import clsx from "clsx";
import { Fragment } from "react/jsx-runtime";
import type { Product } from "../global/product-tile";
import ProductTile from "../global/product-tile";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const tabs = [
  "Featured Projects",
  "Web Applications",
  "Mobile Applications",
  "Strategy & Research",
] as const;

const products: Product[] = [
  {
    title: "Loop Journal",
    tags: ["SaaS", "B2B", "Artificial Intelligence"],
    timeToMVP: "4 wks",
    industry: "Health & Wellness",
    platform1: "iOS & Web",
    platform2: "Web & Mobile",
    raised: "$1M",
    url: "#",
    image: project1,
    satisfaction: "95%",
  },
  {
    title: "Loop Journal",
    tags: ["SaaS", "B2B", "Artificial Intelligence"],
    timeToMVP: "4 wks",
    industry: "Health & Wellness",
    platform1: "iOS & Web",
    platform2: "Web & Mobile",
    raised: "$1M",
    url: "#",
    image: project2,
    satisfaction: "95%",
  },
  {
    title: "Loop Journal",
    tags: ["SaaS", "B2B", "Artificial Intelligence"],
    timeToMVP: "4 wks",
    industry: "Health & Wellness",
    platform1: "iOS & Web",
    platform2: "Web & Mobile",
    raised: "$1M",
    url: "#",
    image: project3,
    satisfaction: "95%",
  },
  {
    title: "Loop Journal",
    tags: ["SaaS", "B2B", "Artificial Intelligence"],
    timeToMVP: "4 wks",
    industry: "Health & Wellness",
    platform1: "iOS & Web",
    platform2: "Web & Mobile",
    raised: "$1M",
    url: "#",
    image: project4,
    satisfaction: "95%",
  },
];

const WorkTabs = () => {
  return (
    <>
      <div className="mt-[64px] border-t-2 border-solid border-[#012D51] rounded-t-[100px] !mx-0 pt-[42px]">
        <Tabs defaultValue={tabs[0]} className="flex flex-col gap-[40px]">
          <div className="flex flex-col items-center gap-[40px] max-w-[843px] mx-auto">
            <TabsList asChild>
              <div className="flex items-center gap-[20px] bg-transparent">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className={clsx(
                      "box-border flex items-center justify-center !py-4 !px-3 gap-[10px] rounded-[20px] text-[18px] leading-[23px] font-medium text-center",
                      "data-[state=active]:!bg-[#E6F0F8] !text-[#B3D1E9] data-[state=active]:!text-[#00060A]",
                      "border border-solid [border-image-source:linear-gradient(90.38deg,#00111E_18.59%,rgba(141,141,141,0)_105.12%)]",
                    )}
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>
            <Separator className="rounded-[100px] !w-[637px]" />
          </div>
          {tabs.map((tab) => (
            <TabsContent
              value={tab}
              className="flex flex-col items-center justify-center gap-[64px]"
              key={tab}
            >
              {products.map((product, index) => (
                <Fragment key={index}>
                  <ProductTile product={product} />
                  <Separator className="h-[2px] [background-image:linear-gradient(90.38deg,#00111E_18.59%,rgba(141,141,141,0)_105.12%)] max-w-[744px] mx-auto" />
                </Fragment>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default WorkTabs;
