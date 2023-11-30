import { db } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function BlockEditPage({
  params,
}: {
  params: { id: string };
}) {
  const block = await db.block.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  async function updateBlock(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const tag = formData.get("tag") as string;
    const code = formData.get("code") as string;

    await db.block.update({
      where: {
        id: Number(params.id),
      },
      data: { title, tag, code },
    });
    redirect("/");
  }

  return (
    <>
      <h1>Edit Block</h1>
      <form action={updateBlock} id="update1">
        <div className="container mx-auto">
          <div className="flex py-1">
            <label htmlFor="title" className="basis-12">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full px-1"
              defaultValue={block?.title}
            ></input>
          </div>
          <div className="flex py-1">
            <label htmlFor="tag" className="basis-12">
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              className="border rounded w-full px-1"
              defaultValue={block?.tag}
            ></input>
          </div>
          <div className="flex py-1">
            <label htmlFor="code" className="basis-12">
              Code
            </label>
            <textarea
              id="code"
              name="code"
              rows={5}
              className="border rounded w-full px-1"
              defaultValue={block?.code}
            ></textarea>
          </div>
        </div>
      </form>

      <div className="flex flex-row py-1 justify-center">
        <Link
          href={"/blocks/" + params.id}
          className="basis-24 bg-indigo-500 rounded mx-2 text-white text-center"
        >
          Back
        </Link>
        <button
          type="submit"
          form="update1"
          className="basis-24 bg-indigo-500 rounded mx-2 text-white"
        >
          Update
        </button>
      </div>
    </>
  );
}
