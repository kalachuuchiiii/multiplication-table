import { useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toTablesURL } from "../utils/toTablesURL";
import type { Table } from "../constants/tables";
import { useTableParams } from "./useTableParams";

export const useTableCard = (table: Table) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const answerInput = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { isAutoNextColumn, isRandomSequencing } = useTableParams();

  const currentRow = useMemo(
    () => table.rows[currentIndex],
    [currentIndex, table]
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!answerInput.current || String(value).trim() !== String(currentRow.answer)) return;
    answerInput.current.value = "";

    if (currentIndex < (table.rows.length - 1)) {
      return setCurrentIndex((prev) => prev + 1);
    }

    if (!table.next || !isAutoNextColumn) {
      return navigate("/");
    }

    return navigate(
      toTablesURL(table.next, isRandomSequencing, isAutoNextColumn)
    );
  };

  useEffect(() => {
     setCurrentIndex(0);
  }, [table.name])

  return {
    onChange,
    currentIndex,
    currentRow,
    answerInput,
  };
};
