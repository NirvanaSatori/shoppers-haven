import React from 'react'

function Paginate({ productsPerPage, totalProducts, paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil( totalProducts/productsPerPage ); i++) {
        pageNumbers.push(i)
    }
  return (
    <nav>
      <ul className='pagination flex flex-wrap gap-2 ml-5 pl-5 mt-2'>
        {pageNumbers.map(pageNumber => (
            <li className='bg-teal-500 page-item page-numbers' key={pageNumber}>
                <button onClick={() => paginate(pageNumber)} className='page-link'>{pageNumber}</button>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Paginate