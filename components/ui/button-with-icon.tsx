import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface AnimatedButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton = ({
  label = "Let's Collaborate",
  href,
  onClick,
  className = "",
}: AnimatedButtonProps) => {
  const content = (
    <Button
      className={`relative text-base font-bold rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-amber-500 hover:bg-amber-400 text-black border-0 ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 transition-all duration-500">
        {label}
      </span>
      <div className="absolute right-1 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </div>
    </Button>
  );

  if (href) {
    return (
      <a href={href}>
        {content}
      </a>
    );
  }

  return content;
};

export default AnimatedButton;
