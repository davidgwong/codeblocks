import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const blocks = await db.block.findMany();
  const renderedBlocks = blocks.map((block) => (
    <Link key={block.id} href={"/blocks/" + block.id}>
      <div>{block.title}</div>
    </Link>
  ));

  return (
    <>
      <h1>Blocks</h1>
      <div>{renderedBlocks}</div>
      <a href="/blocks/new" type="button">
        New block
      </a>
    </>
  );
}
