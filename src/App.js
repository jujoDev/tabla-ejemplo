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
    return <div class="loader"/>;
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
          {data.length === 0 && <tr><td colSpan={3}>No hay items que mostrar</td></tr>}
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
          onClick={goToFirstPage}
          disabled={currentPage === 1 || data.length === 0} 
        >
          Ir al principio
        </button>
        <button
          onClick={prevPage}
          disabled={currentPage === 1 || data.length === 0}
        >
          Página anterior
        </button>
        <span className="page-text">Página actual: {currentPage}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === 10 || data.length === 0}
        >
          Página siguiente
        </button>
        <button
          onClick={goToLastPage}
          disabled={currentPage === 10 || data.length === 0}
        >
          Ir al final
        </button>
      </div>
    </div>
  );
}
