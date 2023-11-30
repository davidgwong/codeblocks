import { db } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function BlockCreatePage() {
  async function createBlock(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const tag = formData.get("tag") as string;
    const code = formData.get("code") as string;

    await db.block.create({ data: { title, tag, code } });
    redirect("/");
  }

  return (
    <>
      <h1>Create Block</h1>
      <form action={createBlock} id="submit1">
        <div className="container mx-auto">
          <div className="flex py-1">
            <label htmlFor="title" className="basis-12">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full"
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
              className="border rounded w-full"
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
              className="border rounded w-full"
            ></textarea>
          </div>
        </div>
      </form>
      <div className="flex flex-row py-1 justify-center">
        <Link
          href={"/"}
          className="basis-24 bg-indigo-500 rounded mx-2 text-white text-center"
        >
          Back
        </Link>
        <button
          type="submit"
          form="submit1"
          className="basis-24 bg-indigo-500 rounded mx-2 text-white"
        >
          Create
        </button>
      </div>
    </>
  );
}
