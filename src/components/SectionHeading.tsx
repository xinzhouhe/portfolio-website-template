import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ children, className, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 relative", align === 'center' ? 'text-center' : 'text-left', className)}>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground relative inline-block z-10 pb-2">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary -z-10 translate-y-[-4px]"></span>
      </h2>
      <div className={cn(
        "h-1 w-20 bg-primary mt-2 rounded-full",
        align === 'center' ? 'mx-auto' : ''
      )} />
    </div>
  );
}
