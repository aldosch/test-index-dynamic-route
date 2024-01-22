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
    <div>
      <h1>Project: {params.projectId}</h1>
      <h2>Index page</h2>
    </div>
  );
}
