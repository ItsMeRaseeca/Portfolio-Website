export default function GradientOrb({ className = '', color = 'indigo' }) {
  const colorMap = {
    indigo: 'bg-indigo-500/10',
    violet: 'bg-violet-500/10',
    cyan: 'bg-cyan-500/8',
  };

  return (
    <div
      className={`absolute rounded-full blur-[120px] pointer-events-none ${colorMap[color] || colorMap.indigo} ${className}`}
      aria-hidden="true"
    />
  );
}
