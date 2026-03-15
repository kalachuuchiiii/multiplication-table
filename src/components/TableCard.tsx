import { type Table } from "../constants/tables";
import { NavLink } from "react-router-dom";
import { useTableCard } from "../hooks/useTableCard";

export const TableCard = ({ table }: { table: Table }) => {
  const { currentIndex, currentRow, onChange, answerInput } =
    useTableCard(table);

  return (
    <div className="space-y-10 text-center ">
      <header>
        <h2 className=" text-3xl w-full text-center">
          {table.name} number :)
        </h2>
        <p>
          {table.guide}
        </p>
      </header>
      <main className="flex flex-col mx-auto items-center gap-6 justify-center">
        <h1 className="text-6xl font-bold">{currentRow.question}</h1>
        <input
          maxLength={6}
          ref={answerInput}
          onChange={onChange}
          placeholder="type here"
          className="w-full rounded-lg p-3 h-10  outline-1 outline-black/20"
        />
      </main>
      <footer className="">
        <div>{currentIndex} / 9</div>
        <NavLink to={"/"} className=" text-center hover:underline ">
          main menu
        </NavLink>
      </footer>

    </div>
  );
};
