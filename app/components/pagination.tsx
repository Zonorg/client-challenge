type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const limit = 10;
const total_posts = 100;

export default function Pagination({ page, setPage }: PaginationProps) {
  const handlePrevious = () => setPage((prevPage) => Math.max(prevPage - 1, 1));
  const handleNext = () => setPage((prevPage) => prevPage + 1);

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={page === 1}>
        Anterior
      </button>
      <button onClick={handleNext} disabled={page === total_posts / limit}>
        Siguiente
      </button>
    </div>
  );
}
