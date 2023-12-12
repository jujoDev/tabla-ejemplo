import { useState, useEffect } from 'react';
import { getData } from '../services/getData';

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getData({currentPage, setData, setLoading});
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
