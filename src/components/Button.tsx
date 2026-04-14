export default function Button({
  count,
  onClick,
  bgClass = "bg-green-500",
}: {
  count: number;
  onClick: () => void;
  bgClass?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`${bgClass} cursor-pointer rounded p-2 font-medium text-white hover:brightness-90`}
    >
      Clicked {count} times
    </button>
  );
}
