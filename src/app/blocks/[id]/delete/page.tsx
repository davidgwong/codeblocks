import Link from "next/link";
import { db } from "@/db";
import { redirect } from "next/navigation";

export default async function DeleteBlockPage({
  params,
}: {
  params: { id: string };
}) {
  async function deleteBlock() {
    "use server";
    try {
      await db.block.delete({
        where: {
          id: Number(params.id),
        },
      });
    } catch (err) {
      console.log(err);
    }
    redirect("/");
  }

  return <>{deleteBlock()}</>;
}
