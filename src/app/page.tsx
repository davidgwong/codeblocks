import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const blocks = await db.block.findMany();
  const renderedBlocks = blocks.map((block) => (
    <>
      <div className="float-left py-2">{block.title}</div>
      <div>
        <Link
          key={block.id}
          href={"/blocks/" + block.id}
          className="float-right basis-24 bg-slate-100 rounded mx-2 text-center p-2"
        >
          View
        </Link>
      </div>
    </>
  ));

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-lg font-bold">Blocks</div>
        <div className=" text-right">
          <a
            href="/blocks/new"
            className="basis-24 bg-indigo-500 rounded mx-2 text-white text-center p-2"
          >
            New block
          </a>
        </div>
        {renderedBlocks}
      </div>
    </>
  );
}
