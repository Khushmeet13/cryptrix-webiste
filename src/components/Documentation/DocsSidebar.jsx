import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";





const SidebarItem = ({
  item,
  level = 0,
  activeItem,
  setActiveItem,
}) => {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(item.children);
  const label = item.title || item;
  const isActive = activeItem === label;


  return (
    <div className="mb-1">
      <button
        onClick={() => {
          setActiveItem(label);
          hasChildren && setOpen(!open);
        }}
        className={`w-full flex items-center justify-between text-sm text-left mx-2 px-3 py-2 rounded-sm transition cursor-pointer
          ${
            isActive
              ? "bg-gray-100 text-black "
              : "text-gray-500 hover:bg-gray-100 hover:text-black"
          }`}
        style={{ paddingLeft: `${level * 14 + 12}px` }}
      >
        <span>{label}</span>
        {hasChildren &&
          (open ? <ChevronDown size={14} /> : <ChevronRight size={14} />)}
      </button>

      {hasChildren && open && (
        <div className="mt-1 border-l border-gray-200 ml-3">
          {item.children.map((child, idx) =>
            typeof child === "string" ? (
              <div
                key={idx}
                onClick={() => setActiveItem(child)}
                className={`cursor-pointer mx-2 px-3 py-1.5 text-sm rounded-sm transition
                  ${
                    activeItem === child
                      ? "bg-gray-100 text-black "
                      : "text-gray-500 hover:bg-gray-100 hover:text-black"
                  }`}
                style={{ paddingLeft: `${level * 14 + 28}px` }}
              >
                {child}
              </div>
            ) : (
              <SidebarItem
                key={idx}
                item={child}
                level={level + 1}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

const DocsSidebar = ({sidebarData}) => {
  const [activeItem, setActiveItem] = useState("Installation");

  return (
    <aside className="w-72 h-screen overflow-y-auto border-r border-gray-300 bg-white px-4 py-4">
      {sidebarData.map((section, idx) => (
        <SidebarItem
          key={idx}
          item={section}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      ))}
    </aside>
  );
};

export default DocsSidebar;
