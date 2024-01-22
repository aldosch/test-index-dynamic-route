import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1>Project page</h1>
      <Link
        href={"/"}
        className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      >
        Home
      </Link>
    </div>
  );
}
