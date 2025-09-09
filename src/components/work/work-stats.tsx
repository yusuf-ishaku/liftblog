const stats: Array<{
  value: string;
  title: string;
}> = [
  {
    value: "3+",
    title: "Year of Experience",
  },
  {
    value: "15+",
    title: "Industries Served",
  },
  {
    value: "50+",
    title: "Total projects delivered",
  },
  {
    value: "12",
    title: "Active clients",
  },
];

const WorkStats = () => {
  return (
    <>
      <div className="mt-[64px]">
        <div className="flex items-center gap-[178px] max-w-[1280px] mx-auto">
          {stats.map((stat, index) => (
            <div className="flex flex-col items-center gap-[12px]" key={index}>
              <h4 className="font-meium text-[48px] leading-[60px] text-center text-[#FAFAFA]">
                {stat.value}
              </h4>
              <p className="text-[20px] leading-[25px] text-center text-[#CFCFCF]">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkStats;
