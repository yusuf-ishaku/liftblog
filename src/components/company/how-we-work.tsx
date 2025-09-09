import { HowWeWorkVector } from "../svgs";

type Content = {
  title: string;
  content: string;
};

const item: Content[] = [
  {
    title: "Data and judgement",
    content:
      "Decisions use data when we have it and good judgment when we don’t.",
  },
  {
    title: "Iterate Fast",
    content: "Small experiments, quick learnings, and continual improvements.",
  },
  {
    title: "Outcome First",
    content: "We design around the problem, not the tech.",
  },
  {
    title: "Clear communication",
    content: "Proactive updates and aligned expectations reduce surprises.",
  },
];

export const HowWeWork = () => {
  return (
    <>
      <div className="mt-[80.69px]">
        <h2 className="font-medium text-[40px] leading-[50px] text-center text-white">
          How We Work
        </h2>
        <div className="flex items-center gap-[24px] mt-8">
          {item.map((item, index) => (
            <div
              className="w-[379px] h-[250px] flex items-center [background-image:linear-gradient(270deg,rgba(0,11,20,0.2)_0%,rgba(1,73,132,0)_100%)] relative overflow-hidden rounded-md"
              key={index}
            >
              <HowWeWorkVector className="size-full absolute -top-4 left-0" />
              <div className="flex flex-col items-start gap-[12px] max-w-[296px] ml-[29px]">
                <h4 className="font-medium text-[24px] leading-[30px] text-[#FAFAFA]">
                  {item.title}
                </h4>
                <p className="text-[20px] leading-[25px] text-[#CFCFCF]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
