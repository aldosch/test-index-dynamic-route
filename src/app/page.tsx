import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1>Home</h1>
      <Link
        href={"/project/123/index"}
        className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      >
        Project 123 index page
      </Link>
    </div>
  );
}
