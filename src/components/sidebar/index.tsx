import { Database, Figma, LayoutGrid, TabletSmartphone } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="max-w-[278px] max-lg:hidden w-full">
      <ul className="flex flex-col gap-4">
        <li className="flex items-center justify-between p-2.5 rounded-[6px] cursor-pointer text-green-500 bg-green-500/20">
          <div className="flex items-center gap-2.5">
            <LayoutGrid size={16} />
            <span>All projects</span>
          </div>
          <span>104</span>
        </li>

        <li className="flex items-center justify-between p-2.5 rounded-[6px] cursor-pointer text-zinc-200">
          <div className="flex items-center gap-2.5">
            <TabletSmartphone size={16} />
            <span>Project front end</span>
          </div>
          <span>104</span>
        </li>

        <li className="flex items-center justify-between p-2.5 rounded-[6px] cursor-pointer text-zinc-200">
          <div className="flex items-center gap-2.5">
            <Database size={16} />
            <span>All projects</span>
          </div>
          <span>104</span>
        </li>

        <li className="flex items-center justify-between p-2.5 rounded-[6px] cursor-pointer text-zinc-200">
          <div className="flex items-center gap-2.5">
            <Figma size={16} />
            <span>All projects</span>
          </div>
          <span>104</span>
        </li>
      </ul>
    </aside>
  );
}
