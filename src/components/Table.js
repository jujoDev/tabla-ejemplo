import React from 'react';
import { usePagination } from '../hooks/usePagination';
import TableControls from './TableControls';

export default function Table () {
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
    <>
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
        <TableControls data={data} currentPage={currentPage} goToFirstPage={goToFirstPage} goToLastPage={goToLastPage} nextPage={nextPage} prevPage={prevPage}/>
    </>
    );
}