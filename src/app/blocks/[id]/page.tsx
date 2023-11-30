import Link from "next/link";
import { db } from "@/db";
import { redirect } from "next/navigation";

export default async function BlockIDPage({
  params,
}: {
  params: { id: string };
}) {
  const block = await db.block.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  const deleteBlock = async () => {
    "use server";

    await db.block.delete({
      where: {
        id: Number(params.id),
      },
    });

    redirect("/");
  };

  return (
    <>
      <h1>View Block</h1>
      <div className="container mx-auto">
        <div className="flex py-1">
          <label htmlFor="title" className="basis-12">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border rounded w-full px-1 bg-slate-100"
            defaultValue={block?.title}
            readOnly
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
            className="border rounded w-full px-1 bg-slate-100"
            defaultValue={block?.tag}
            readOnly
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
            className="border rounded w-full px-1 bg-slate-100"
            defaultValue={block?.code}
            readOnly
          ></textarea>
        </div>
      </div>
      <form action={deleteBlock}>
        <div className="flex flex-row py-1 justify-center">
          <Link
            type="button"
            className="basis-24 bg-indigo-500 rounded mx-2 text-white text-center"
            href={"/blocks/" + params.id + "/edit"}
          >
            Edit
          </Link>
          <button
            type="submit"
            className="basis-24 bg-indigo-500 rounded mx-2 text-white text-center"
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
}
