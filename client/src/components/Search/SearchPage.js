import React, { useEffect, useState, useContext } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Menu, Transition, Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import DotLoader from "react-spinners/DotLoader";
import './search.css'
import Paginate from './Paginate'
import { AuthContext } from '../../context/AuthContext'
import { query } from '../HomePage/HomePage'
import { ProductContext } from '../../context/ProductContext'
import FilterProducts from './FilterProducts'
import { AuthContext } from '../../context/AuthContext'


// import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const relevance = [
  { name: 'Price High-Low' },
  { name: 'Price Low-High' },
  { name: 'Delivery Cost' },
  { name: 'Clear Filter' },
] 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function SearchPage() {
  // const {products} = useContext(ProductContext)
  const { productState:{delivery_cost , searchQuery, sort}, productDispatch } = useContext(ProductContext)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(5)
  const indexOfLastShipment = currentPage * productsPerPage //5
  const indexOfFirstShipment = indexOfLastShipment - productsPerPage //0
  // const currentProducts = products?.slice(indexOfFirstShipment , indexOfLastShipment)
  const {user, token} = useContext(AuthContext)
  const [selected, setSelected] = useState(relevance[3])
  


  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    fetch(`/products?search=${query}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    .then(r => r.json())
    .then((data) => setProducts(data))
  }, [sort])

  
  const transformProducts = () => {
    let sortedProducts = products;
    

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (delivery_cost) {
      sortedProducts = sortedProducts.sort((a, b) =>
        delivery_cost === "lowToHigh" ? a.delivery_cost - b.delivery_cost : b.delivery_cost - a.delivery_cost
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    
    return sortedProducts

    
  };


  return (
    <div>
    { 
      loading ? (
        <div className='loading-screen'>
          <DotLoader
            color={"#14B8A6"}
            loading={loading}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h1 className='mt-5'>Loading ...</h1>
        </div> 
      ) 
      
      :

    (<div className='mt-24'>
      <div className='flex justify-around'>
        <div className="p-2 rounded-lg w-5/12 search-div flex shadow bg-white">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                id="search"
                name="search"
                className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-lg placeholder-gray-500 focus:border-green-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
                placeholder="Search"
                type="search"
                // onChange={(e) => query = e.target.value}
                onChange={(e) => {
                  productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
                />
            </div>
            <div>
                <MagnifyingGlassIcon onClick={handleSearch} className="p-2 mx-2 text-white search-button cursor-pointer" aria-hidden="true" />
            </div>
        </div>
        <div className="top-16 w-72">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 ">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-teal-500 text-white font-medium py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-6 w-6 text-gray-1000"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {/* {people.map((person, personIdx) => ( */}
                <Listbox.Option
                
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-teal-100 text-teal-300' : 'text-gray-900'
                    }`
                  }
                  value={relevance[0]}
                  name="Price High-Low"
                  onClick={() =>
                    productDispatch({
                      type: "SORT_BY_PRICE",
                      payload: "highToLow" ,
                      
                    })}
                                             
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {relevance[0].name}
                        
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-300">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
                <Listbox.Option
                
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-teal-100 text-teal-300' : 'text-gray-900'
                  }`
                }
                value={relevance[1]}
                name="Price Low-High"
                onClick={() =>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "lowToHigh",
                  })
                }
                                            
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {relevance[1].name}
                      
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-300">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>

              <Listbox.Option
                
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-teal-100 text-teal-300' : 'text-gray-900'
                    }`
                  }
                  value={relevance[2]}
                  name=" Delivery Cost"
                  onClick={() =>
                    productDispatch({
                      type: "FILTER_BY_DELIVERY_COST",
                      payload: "lowToHigh",
                    })
                  }
                                              
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {relevance[2].name}
                       
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-300">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
                <Listbox.Option
                  
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-teal-100 text-teal-300' : 'text-gray-900'
                    }`
                  }
                  value={relevance[3]}
                  name="Clear Filter"
                  onClick={() =>
                    productDispatch({
                      type: "CLEAR_FILTERS",
                    })
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {relevance[3].name}
                       
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-300">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>            
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto w-9/12 py-3 px-4 sm:py-24 sm:px-6 lg:px-0">
            <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Search Results</h1>
            <div className="mt-12 w-full">
                <section aria-labelledby="cart-heading">
                    <h2 id="cart-heading" className="sr-only">
                    Items in your shopping cart
                    </h2>
                    <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
                        {transformProducts().slice(indexOfFirstShipment , indexOfLastShipment).map((product) => (                          
                              <li key={product.id} className="flex py-6">
                                <div className="flex-shrink-0">
                                    <img
                                    src={product.image_url}
                                    alt={product.imageAlt}
                                    className="h-32 w-32 bg-cover rounded-md object-cover object-center sm:h-32 sm:w-32"
                                    />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                                    <div>
                                    <div className="flex justify-between">
                                        <h4 className="text-sm">
                                            {product.name}
                                        </h4>
                                        <a target='blank' href={product.website_url} className="ml-4 text-white font-medium no-underline px-4 py-2 rounded button shadow">Go to Store</a>
                                    </div>
                                    <p className="mt-0 text-lg">From {product.website_name}</p>
                                    </div>

                                    <div className="flex flex-1 items-end justify-between">
                                        <p className="text-3xl font-medium hover:text-indigo-500">
                                        <span>Price: ${product.price}</span>
                                        </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between">
                                        <p className="text-sm font-medium hover:text-indigo-500">
                                        <span>Delivery Cost: ${product.delivery_cost}</span>
                                        </p>
                                    </div>
                                </div>
                            </li> 
                        ))}
                    </ul>
                </section>
            </div>
            {/* <Paginate productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} /> */}
            <Paginate productsPerPage={productsPerPage} totalProducts={transformProducts().length} paginate={paginate} />

        </div>
      </div>
    </div>)
    }
    </div>
  )
}

export default SearchPage




// {/* <Menu as="div" className="relative inline-block text-left">
//           <div>
//             <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white p-3 text-sm font-semibold text-gray-900 shadow ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//             Sort By
//             <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
//             </Menu.Button>
//           </div>
//           <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-100"
//                 enterFrom="transform opacity-0 scale-95"
//                 enterTo="transform opacity-100 scale-100"
//                 leave="transition ease-in duration-75"
//                 leaveFrom="transform opacity-100 scale-100"
//                 leaveTo="transform opacity-0 scale-95"
//             >
//                 <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                 <div className="py-1">
//                     <Menu.Item>
//                       {/* active = sort === "lowToHigh" ? true : false */}
//                     {({ active }) => (
//                         <button
//                         className={classNames(
//                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                             'block w-full px-4 py-2 text-left text-sm'
//                         )}
//                         onClick={() =>
//                           productDispatch({
//                             type: "SORT_BY_PRICE",
//                             payload: "highToLow" ,
                            
//                           })
//                       // onChange={}
//                         }
//                         >
//                         Price High-Low
//                         </button>
//                     )}
//                     </Menu.Item>
//                     <Menu.Item>
//                     {({ active }) => (
//                         <button
//                         className={classNames(
//                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                             'block w-full px-4 py-2 text-left text-sm'
//                         )}

//                         onClick={() =>
//                           productDispatch({
//                             type: "SORT_BY_PRICE",
//                             payload: "lowToHigh",
//                           })
//                         }
//                         >
//                         Price Low-high
//                         </button>
//                     )}
//                     </Menu.Item>
//                     <Menu.Item>
//                     {({ active }) => (
//                         <button
//                         className={classNames(
//                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                             'block w-full px-4 py-2 text-left text-sm'
//                         )}
//                         onClick={() =>
//                           productDispatch({
//                             type: "FILTER_BY_DELIVERY_COST",
//                             payload: "lowToHigh",
//                           })
//                         }
//                         >
//                         Relevance/delivery_cost
//                         </button>
//                     )}
//                     </Menu.Item>
//                     <Menu.Item>
//                     {({ active }) => (
//                         <button
//                         className={classNames(
//                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                             'block w-full px-4 py-2 text-left text-sm'
//                         )}
//                         onClick={() =>
//                           productDispatch({
//                             type: "CLEAR_FILTERS",
//                           })
//                         }
//                         >
//                         Clear filters
//                         </button>
//                     )}
//                     </Menu.Item>
//                 </div>
//                 </Menu.Items>
//           </Transition>
//         </Menu> */}