import Categories from "./Categories";
import SectionDua from "./SectionDua";

export default function DuaPage() {
  return (
    <div className="flex items-start justify-between gap-[30px]">
      <Categories />
      <SectionDua />
    </div>
  );
}
