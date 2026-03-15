export const useTableParams = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const isAutoNextColumn = searchParams.get("auto-next-cols") === "true";
  const isRandomSequencing = searchParams.get("random-sequencing") === "true";

  return {
    isAutoNextColumn,
    isRandomSequencing,
  };
};
