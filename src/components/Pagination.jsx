const Pagination = ({ totalPage, itemPerPage, setCurrentPage }) => {
  let page = [];

  for (let i = 1; i <= Math.ceil(totalPage / itemPerPage); i++) {
    page.push(i);
  }

  return (
    <div>
      {page.map((page, index) => {
        return (
          <button className="ml-[30px] text-xl border-2 border-[#000] w-[20px]"
            onClick={() => {
              setCurrentPage(page);
            }}
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
