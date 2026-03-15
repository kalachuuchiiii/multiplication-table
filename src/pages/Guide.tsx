import { Layout } from "@src/components/Layout";
import { NavLink } from "react-router-dom";

const Guide = () => {
  return (
    <Layout>
      <div>
        <h2 className="font-bold">common rule:</h2>
        <ul>
          <li>
            if you correctly answered a question, automatically go to the next
            question.
          </li>
        </ul>
      </div>

      <main className="space-y-4 text-left">
        <div>
          <h2 className="font-bold">random Sequencing</h2>
          <p>when enabled, the order of questions is randomized.</p>
        </div>
        <div>
          <h2 className="font-bold">auto Next Column</h2>
          <p>
            when enabled, automatically go to the next number after finishing
            the current one. if you're on the last number(12), you're redirected
            to the main menu instead.
          </p>
        </div>
      </main>
    
      <footer className="text-left w-full">
        <NavLink to={"/"} className={"hover:underline"}>
          main menu
        </NavLink>
      </footer>
    </Layout>
  );
};

export default Guide;
