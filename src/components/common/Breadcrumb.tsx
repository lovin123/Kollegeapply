import { IBreadcrumbProps } from "@/types/common/breadcrumb.type";
import React from "react";

const Breadcrumb: React.FC<IBreadcrumbProps> = ({ items }) => {
  return (
    <nav
      className="flex gap-1.5 px-32 py-6 text-sm max-md:px-10 max-sm:px-5"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-gray-400">&gt;</span>}
          <span
            className={
              item.isActive ? "font-semibold text-indigo-900" : "text-gray-400"
            }
          >
            {item.label}
          </span>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
