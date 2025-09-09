import clsx from "clsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import project1 from "@/assets/images/project1.png";
import project2 from "@/assets/images/project2.png";
import project3 from "@/assets/images/project3.png";
import project4 from "@/assets/images/project4.png";
import { Fragment } from "react/jsx-runtime";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const tabs = [
  "Featured Projects",
  "Web Applications",
  "Mobile Applications",
  "Strategy & Research",
] as const;

type Product = {
  title: string;
  image: string;
  tags: string[];
  timeToMVP: string;
  industry: string;
  platform1: string;
  satisfaction: string;
  platform2: string;
  raised: string;
  url: string;
};

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

const StatGrid = ({
  item1,
  item2,
  item3,
}: Record<
  "item1" | "item2" | "item3",
  {
    title: string;
    value: string;
  }
>) => (
  <div className="flex items-center gap-[56px]">
    <div className="basis-[20%] flex flex-col items-start gap-[16px]">
      <p className="text-[16px] leading-[20px] text-center text-white">
        {item1.title}
      </p>
      <p className="font-medium text-[24px] leading-[30px] text-center text-white">
        {item1.value}
      </p>
    </div>
    <div className="basis-[60%] flex flex-col items-start gap-[16px] border-x-[#012D51] border-solid border-x-2 px-8">
      <p className="text-[16px] leading-[20px] text-center text-white">
        {item2.title}
      </p>
      <p className="font-medium text-[24px] leading-[30px] text-center text-white">
        {item2.value}
      </p>
    </div>
    <div className="basis-[20%] flex flex-col items-start gap-[16px]">
      <p className="text-[16px] leading-[20px] text-center text-white">
        {item3.title}
      </p>
      <p className="font-medium text-[24px] leading-[30px] text-center text-white">
        {item3.value}
      </p>
    </div>
  </div>
);

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
                  <div className="flex items-center gap-[57px] max-w-[1342px]">
                    <div className="w-[642px] h-[428px] bg-[#CCE0F0] rounded-[10px]">
                      <img
                        src={product.image}
                        draggable={false}
                        className="size-full aspect-video"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-[56px]">
                      <div className="flex flex-col items-start gap-[24px] ">
                        <h4 className="font-medium text-[32px] leading-[40px] text-[#FAFAFA]">
                          {product.title}
                        </h4>
                        <div className="flex items-center gap-[16px]">
                          {product.tags.map((tag) => (
                            <Badge
                              className="box-border bg-[rgba(1,45,81,0.2)] rounded-[30px] text-[14px] leading-[20px] text-center text-[#B3D1E9] border border-solid [border-image-source:linear-gradient(90.38deg,#00111E_18.59%,rgba(141,141,141,0)_105.12%)]"
                              key={tag}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Separator className="!bg-[#012D51] !w-[620px]" />
                        <div className="flex flex-col gap-[64px]">
                          <StatGrid
                            item1={{
                              title: "Time to MVP",
                              value: product.timeToMVP,
                            }}
                            item2={{
                              title: "Industry",
                              value: product.industry,
                            }}
                            item3={{
                              title: "Platform",
                              value: product.platform1,
                            }}
                          />
                          <StatGrid
                            item1={{
                              title: "Satisfaction",
                              value: product.satisfaction,
                            }}
                            item2={{
                              title: "Platform",
                              value: product.platform2,
                            }}
                            item3={{
                              title: "Raised",
                              value: product.raised,
                            }}
                          />
                        </div>
                      </div>
                      <Button className="[box-shadow:4px_4px_5px_0px_#014883E5_inset] rounded-[10px] box-border bg-[#0264B5] border border-solid border-[#014883] text-[14px] leading-[18px] font-medium text-white backdrop-blur-3xl">
                        Open Website
                      </Button>
                    </div>
                  </div>
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
