import gradientGlass from "@/assets/images/gradient-glass.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const FormSection = ({
  options,
  title,
}: {
  title: string;
  options: string[];
}) => {
  return (
    <div className="flex flex-col items-start gap-[16px]">
      <h5 className="text-[18px] leading-[23px] text-[#FAFAFA]">{title}</h5>
      <div className="space-x-[10px] space-y-[10px]">
        {options.map((option) => (
          <Button
            variant="outline"
            key={option}
            className="rounded-[10px] border border-solid border-[#012D51] !bg-transparent text-[16px] leading-[20px] text-[#4F4F4F] dark:text-[#CFCFCF]"
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

const BlogContact = () => {
  return (
    <>
      <div className="mt-[341px]">
        <div className="grid grid-cols-2 items-start gap-[41px]">
          <div className="flex flex-col items-start gap-[64px]">
            <img
              src={gradientGlass}
              className="w-[217px] h-[232.98px]"
              draggable={false}
            />
            <div className="flex flex-col items-start gap-[24px]">
              <h4 className="font-medium text-[48px] leading-[60px]">
                Have something in mind?
                <br />
                Let’s bring it to life.
              </h4>
              <p className="text-[20px] leading-[25px] text-[#4F4F4F] dark:text-[#CFCFCF]">
                We’d love to hear what you’re building. Whether you’re early or
                ready to launch, reach out
              </p>
            </div>
          </div>
          <div className="[background:linear-gradient(270deg,rgba(0,11,20,0.2)_0%,rgba(1,73,132,0)_100%)] rounded-[10px] mr-[40px] max-w-[594px]">
            <div className="flex flex-col items-center gap-[32px] p-4">
              <div className="flex flex-col items-start gap-[32px]">
                <FormSection
                  title="I'm looking for help with:"
                  options={[
                    "MVP Build",
                    "App Design",
                    "Web Platform",
                    "AI Integration",
                    "Software Development",
                    "UI/UX Audit",
                    "Product Management",
                    "Business Development",
                  ]}
                />
                <FormSection
                  title="I'm budgeting around:"
                  options={["Under $5K", "$5K-10K", "$10K-30K", "$30K+"]}
                />
                <div className="flex flex-col items-start gap-[16px] w-full">
                  <h5 className="text-[18px] leading-[23px] text-[#060606] dark:text-[#FAFAFA]">
                    Contact Us:
                  </h5>
                  <div className="flex flex-col items-start gap-[16px]">
                    <div className="flex gap-[32px] items-center justify-between">
                      <Input
                        placeholder="Name"
                        className="!bg-transparent rounded-lg"
                      />
                      <Input
                        placeholder="Email"
                        type="email"
                        className="!bg-transparent rounded-lg"
                      />
                    </div>
                  </div>
                  <Textarea
                    placeholder="Project Overview"
                    className="w-full !bg-transparent appearance-none"
                  />
                </div>
              </div>
              <div>
                <Button className="mt-2 w-[196px] h-[44px] rounded-lg">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContact;
