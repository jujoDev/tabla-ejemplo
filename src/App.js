import React from 'react';
import './App.css';
import { usePagination } from './hooks/usePagination';

export default function App() {
  const {
    currentPage,
    data,
    loading,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
  } = usePagination();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="custom-body">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Tagline</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'even-row' : 'odd-row'}
            >
              <td>{item.name}</td>
              <td>{item.tagline}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="custom-pagination">
        <button
          className="pagination-button"
          onClick={goToFirstPage}
          disabled={currentPage === 1}
        >
          Ir al principio
        </button>
        <button
          className="pagination-button"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Página anterior
        </button>
        <span className="page-text">Página actual: {currentPage}</span>
        <button
          className="pagination-button"
          onClick={nextPage}
          disabled={currentPage === 10}
        >
          Página siguiente
        </button>
        <button
          className="pagination-button"
          onClick={goToLastPage}
          disabled={currentPage === 10}
        >
          Ir al final
        </button>
      </div>
    </div>
  );
}
