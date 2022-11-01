
import classes from "./styles.module.css";



export const Pagination = (props) => {
  const { totalPages, currentPage, totalCount, limit, handlePageChange } = props;

  const pages = [
    <div
      key={1}
      onClick={() => handlePageChange(1)}
      className={currentPage === 1 ? classes.currentPage : classes.page}>
      1
    </div>,
  ];
  if (totalPages > 7 && currentPage > 4) {
    pages.push(<span className={classes.hiddenPages}>...</span>);
  }
  for (let page = 2; page < totalPages; page++) {
    if (
      totalPages < 7 ||
      (page <= 5 && currentPage < 5) ||
      (page > totalPages - 5 && currentPage > totalPages - 4) ||
      (page - currentPage) * (page < currentPage ? -1 : 1) < 2 ||
      page === 1 ||
      page === totalPages
    ) {
      pages.push(
        <div
          key={page}
          onClick={() => handlePageChange(page)}
          className={page === currentPage ? classes.currentPage : classes.page}>
          {page}
        </div>,
      );
    }
  }
  if (totalPages > 7 && currentPage < totalPages - 3) {
    pages.push(<span className={classes.hiddenPages}>...</span>);
  }
  if (totalPages > 1) {
    pages.push(
      <div
        onClick={() => handlePageChange(totalPages)}
        className={currentPage === totalPages ? classes.currentPage : classes.page}>
        {totalPages}
      </div>,
    );
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>
          <p className={classes.text}>
            Showing&nbsp;
            {totalPages > 1 ? (
              <>
                <span className={classes.value}>{(currentPage - 1) * limit + 1}&nbsp;</span>
                to&nbsp;
                <span className={classes.value}>
                  {currentPage * limit > totalCount ? totalCount : currentPage * limit}
                </span>
                &nbsp;of&nbsp;<span className={classes.value}>{totalCount}</span>
                &nbsp;
              </>
            ) : (
              <>
                <span className={classes.value}>{totalCount}&nbsp;</span>
              </>
            )}
            {totalCount === 1 ? "entry" : "entries"}
          </p>
        </div>
        {totalPages > 1 && (
          <div>
            <nav className={classes.pagesContainer}>
              <div className={classes.prevButton} onClick={handlePrevClick}>
                Prev
              </div>
              {pages}
              <div className={classes.nextButton} onClick={handleNextClick}>
                Next
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

