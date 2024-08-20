import { Header } from "@/src/Header";
import { MenuFilter } from "@/src/MenuFilter";
import { REACT_CARDS } from "@/src/react-cards";
import { ReactCard } from "@/src/ReactCard";

export default function Home({ searchParams }) {
  const currentFilter = searchParams.filter;
  // pour eviter le doublon avec Set
  const filters = [...new Set(REACT_CARDS.map((card) => card.category))];
  // console.log({ currentFilter, filters });

  return (
    <main className="m-auto  h-full max-w-4xl flex flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 py-2 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
        <MenuFilter filters={filters} currentFilter={currentFilter} />
        <div className="size-full overflow-auto">
          <div
            className="grid h-fit grid-cols-1  gap-4 w-full 
          md:grid-cols-2
          lg:grid-cols-3
          "
          >
            {REACT_CARDS.filter((card) => {
              if (!currentFilter) {
                return true;
              }
              return card.category === currentFilter;
            }).map((category) => (
              <ReactCard
                key={category.name}
                card={category}
                hideCategory={currentFilter}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
