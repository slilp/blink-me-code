import React from "react";
import { Tag, tags } from "../../types";
import { useRouter } from "next/router";
import Link from "next/link";

function TagSection() {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-10">
      {tags.map((t: Tag) => (
        <Link href={t.path}>
          <div
            className={
              tag === t.tag
                ? "w-full p-2 mt-3 mx-3 text-md text-center rounded-full cursor-pointer hover:opacity-70 hover:bg-gray-100 border-2 border-gray-400"
                : "w-full p-2 mt-3 mx-3 text-md text-center rounded-full cursor-pointer hover:opacity-70 hover:bg-gray-100 border-2 border-white"
            }
          >
            {t.label}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TagSection;
