import { Layout } from "../components/Layout";
import { tableNames } from "../constants/tables";
import { NavLink } from "react-router-dom";
import { toTablesURL } from "../utils/toTablesURL";
import { useState } from "react";

const Landing = () => {
  const [isRandomSequencing, setIsRandomSequencing] = useState(false);
  const [isAutoNextColumn, setIsAutoNextColumn] = useState(false);

  return (
    <Layout>
      <header className="text-center">
        <h1 className=" text-2xl truncate lg:text-4xl font-semibold ">
          my multiplication table
        </h1>
        <p>practice the multiplication table by column</p>
      </header>
      <main className="w-full text-center  space-y-5">
        <p>
          {" "}
          Select which number to practice on:
        </p>
        <section className=" flex w-full  justify-center flex-wrap gap-2">
          {tableNames.map((name, index) => (
            <NavLink
              key={name}
              className="outline-1 w-20 flex flex-col items-center justify-center  lg:w-22 hover:outline-pink-400 hover:bg-pink-100 transition-all duration-300 outline-black/20 px-6 py-1 rounded-xl"
              to={toTablesURL(name, isRandomSequencing, isAutoNextColumn)}
            >
              <p> ({index + 1}) </p>
              <p>{name}</p>
            </NavLink>
          ))}
        </section>
      </main>
      <footer className="text-left flex-col flex items-start gap-2 w-full">
        <div className="space-x-2">
          <input
            checked={isAutoNextColumn}
            onChange={(e) => setIsAutoNextColumn(e.target.checked)}
            type="checkbox"
            className="translate-y-0.5"
          />
          <label>auto-next column</label>
        </div>
        <div className="space-x-2">
          <input
            checked={isRandomSequencing}
            onChange={(e) => setIsRandomSequencing(e.target.checked)}
            type="checkbox"
            className="translate-y-0.5"
          />
          <label>random sequencing</label>
        </div>
        <NavLink
          to={"/guide"}
          className="space-x-2  hover:underline flex items-center gap-2"
        >
          <div>?</div>
          <p>guide</p>
        </NavLink>
      </footer>
    </Layout>
  );
};

export default Landing;
