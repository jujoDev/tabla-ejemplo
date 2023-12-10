import { useState, useEffect } from 'react';

export const usePagination = (initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (pageNumber) => {
    try {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=10`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData(currentPage);
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(10);
  };

  return {
    currentPage,
    data,
    loading,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
  };
};

export default usePagination;
