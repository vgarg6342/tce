

interface InsightRollProps {
  insights: string[];
}

const InsightRoll = ({ insights }: InsightRollProps) => {
  return (
    <div className="w-full bg-purple-600 dark:bg-accentDark text-light dark:text-dark whitespace-nowrap overflow-hidden">
      <div className="animate-roll  w-full py-2 sm:py-3 flex items-center text-white justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((text, index) => (
          <div key={index}>
            {text} <span className="px-4">|</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;