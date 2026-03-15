import type { TableNames } from "../constants/tables";

export const toTablesURL = (
  name: TableNames,
  isRandomSequencing: boolean,
  isAutoNextColumn: boolean
): string => {
  return `/tables/${name}?random-sequencing=${isRandomSequencing}&auto-next-cols=${isAutoNextColumn}`;
};
