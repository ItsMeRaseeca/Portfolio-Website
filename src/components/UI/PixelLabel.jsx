export default function PixelLabel({ children }) {
  return (
    <span className="inline-block font-pixel text-[10px] text-indigo-400 tracking-[0.2em] mb-6 px-3 py-1.5 border border-indigo-500/20 rounded-md bg-indigo-500/5 select-none">
      {children}
    </span>
  );
}
