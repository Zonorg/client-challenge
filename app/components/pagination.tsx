import { LIMIT, TOTAL_POSTS } from "@/app/page";

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ page, setPage }: PaginationProps) => {
  const handlePrevious = () => setPage((prevPage) => Math.max(prevPage - 1, 1));
  const handleNext = () => setPage((prevPage) => prevPage + 1);

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={page === 1}>
        Anterior
      </button>
      <button onClick={handleNext} disabled={page === TOTAL_POSTS / LIMIT}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
