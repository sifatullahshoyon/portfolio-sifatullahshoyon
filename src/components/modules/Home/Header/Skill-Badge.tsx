interface SkillBadgeProps {
  name: string;
  colorClass: string;
  delay: number;
  mounted: boolean;
}

export default function SkillBadge({
  name,
  colorClass,
  delay,
  mounted,
}: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colorClass} border transition-all duration-300 hover:scale-105`}
      style={{
        animationDelay: `${(delay + 1) * 200}ms`,
        animation: mounted ? "fadeIn 0.5s ease-out forwards" : "none",
        opacity: 0,
      }}
    >
      {name}
    </span>
  );
}
