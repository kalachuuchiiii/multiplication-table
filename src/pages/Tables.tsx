import { TableCard } from "../components/TableCard";
import { Navigate, useParams } from "react-router-dom";
import tables, { type TableNames } from "../constants/tables";
import { Layout } from "../components/Layout";
import { shuffle } from "../utils/shuffle";
import {  useMemo } from "react";
import { useTableParams } from "../hooks/useTableParams";

const Tables = () => {
  const { tableName = "seven" } = useParams();
  const currentTable = tables[tableName as TableNames];
  const { isRandomSequencing } = useTableParams();

  if (!currentTable) {
    return <Navigate to={"/not-found"} />;
  }

  const table = useMemo(() => {
    if (!isRandomSequencing) {
      return currentTable;
    }
    return {
      ...currentTable,
      rows: shuffle(currentTable.rows),
    };
  }, [tableName, isRandomSequencing, currentTable]);


  return (
    <Layout>
      <TableCard table={table} />
    
    </Layout>
  );
};

export default Tables;
