import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectActionPage({
  params,
}: {
  params: { projectId: string; index: string };
}) {
  if (params.index !== "index") {
    return notFound();
  }
  return (
    <div className="flex flex-col items-start gap-4">
      <h1>Project: {params.projectId}</h1>
      <h2>Index page</h2>
      <Link
        href={"/"}
        className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      >
        Home
      </Link>
    </div>
  );
}
