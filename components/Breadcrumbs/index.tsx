import React from "react";
import Link from "next/link";

export interface BreadcrumbsProps {
  label: string;
  path: string;
}

function Breadcrumbs({ data }: { data: BreadcrumbsProps[] }) {
  return (
    <div className="flex gap-1 text-lg">
      {data.map(({ label, path }, index) =>
        index === data.length - 1 ? (
          <span>{label}</span>
        ) : (
          <span>
            <Link href={path}>
              <span className="hover:text-yellow-600 cursor-pointer">
                {label}
              </span>
            </Link>{" "}
            /
          </span>
        )
      )}
    </div>
  );
}

export default Breadcrumbs;
