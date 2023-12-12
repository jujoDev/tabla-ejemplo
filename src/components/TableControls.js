import React from "react";

export default function TableControls({data, currentPage, goToFirstPage, goToLastPage, nextPage, prevPage}){
    return (
    <>
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
    </>
    )
}