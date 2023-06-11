import React, { useEffect, useState, useContext } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Menu, Transition, Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import DotLoader from "react-spinners/DotLoader";
import './search.css'
import { Modal } from 'react-bootstrap'
import Paginate from './Paginate'
import { query } from '../HomePage/HomePage'
import { ProductContext } from '../../context/ProductContext'
// import FilterProducts from './FilterProducts'
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
  const { productState:{delivery_cost , sort}, productDispatch } = useContext(ProductContext)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(5)
  const indexOfLastShipment = currentPage * productsPerPage //5
  const indexOfFirstShipment = indexOfLastShipment - productsPerPage //0
  const {user, token, loggedIn} = useContext(AuthContext)
  const [selected, setSelected] = useState(relevance[3])
  const [searches, setSearches] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  useEffect(() => {
    setLoading(true)
    fetch(`/products?search=${query}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(r => r.json())
    .then((data) => setProducts(data))
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  
  function handleSearch() {
    setLoading(true)
    if(user){
      fetch('/search_histories', {
        method: 'POST',
        headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          query: searchQuery,
          user_id: user.id
        })
      })
    }

    fetch(`/products?search=${searchQuery}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(r => r.json())
    .then((data) => {
      setProducts(data)
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    })
  }

  function searchHistory(history){
    setLoading(true)
    fetch(`/products?search=${history}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(r => r.json())
    .then((data) => {
      setProducts(data)
      setTimeout(() => {
        setLoading(false)
      }, 500)
    })
  }

  function allProducts() {
    setLoading(true)
    fetch(`/products`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(r => r.json())
    .then((data) => {
      setProducts(data)
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    })
  }

  const transformProducts = () => {
    let sortedProducts = products;
    

    if ( sort === "lowToHigh") {
      sortedProducts = sortedProducts.sort((a, b) =>
         a.price - b.price
      );
    }

    if (sort === "highToLow") {
      sortedProducts = sortedProducts.sort((a, b) =>
         b.price - a.price
      );
    }

    if (delivery_cost) {
      sortedProducts = sortedProducts.sort((a, b) =>
        a.delivery_cost - b.delivery_cost
      );
    }
    
    return sortedProducts

    
  };

  function fetchSearches(){
      fetch('/search_histories', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(data => setSearches(data))
  }


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

    (<div className='min-h-screen mt-24'>
      <div className='flex  justify-around search-bar'>
        <div className="p-2 rounded-lg w-5/12 search-div flex shadow bg-white">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                {
                  searchQuery ? 
                  <input
                id="search"
                name="search"
                className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-lg placeholder-gray-500 focus:border-green-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
                placeholder="Search"
                type="search"
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                :
                <input
                  type="text" id="error" className="bg-teal-50 pl-10 border border-teal-500 text-teal-900 placeholder-teal-700 text-sm rounded-lg focus:ring-teal-500 
                  focus:border-teal-500 block w-full p-2.5 dark:text-teal-500 dark:placeholder-teal-500 dark:border-teal-500" placeholder="Cannot be empty"
                   onChange={(e) => {setSearchQuery(e.target.value);}}
                />
              }
            </div>
            <div>{
              searchQuery ? 
                <MagnifyingGlassIcon onClick={() => handleSearch()} className="p-2 mx-2 text-white search-button cursor-pointer" aria-hidden="true" /> 
                :
                <MagnifyingGlassIcon className="p-2 ml-5 text-white search-button cursor-pointer cursor-not-allowed" aria-hidden="true" />
                }
            </div>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            {/* <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-teal-500 text-white p-3 text-sm font-semibold text-gray-900 shadow ring-1 ring-inset ring-gray-300 hover:bg-gray-50"> */}
            <Menu.Button className="relative w-full cursor-default rounded-lg bg-teal-500 text-white font-medium py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">

            Search
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-1000" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    { loggedIn ? 
                    <Menu.Item>
                    {({ active }) => (
                        <button
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                        )}     
                        onClick={() => {handleShow(); fetchSearches();}}                   
                        >
                        Your searches
                        </button>
                    )}
                    </Menu.Item>
                    :
                    null
                    }
                    <Menu.Item>
                    {({ active }) => (
                        <button
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                        )}
                        onClick={allProducts}
                        >
                        Popular Searches
                        </button>
                    )}
                    </Menu.Item>
                </div>
                </Menu.Items>
          </Transition>
        </Menu>
        <div className="top-16 w-72">
          <Listbox className="" value={selected} onChange={setSelected}>
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
                <Listbox.Options className="p-0 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {/* {people.map((search, searchIdx) => ( */}
                    <Listbox.Option
                    
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-teal-100' : 'text-gray-900'
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
                        active ? 'bg-teal-100' : 'text-gray-900'
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
                          active ? 'bg-teal-100' : 'text-gray-900'
                        }`
                      }
                      value={relevance[2]}
                      name=" Delivery Cost"
                      onClick={() =>
                        productDispatch({
                          type: "FILTER_BY_DELIVERY_COST",
                          payload: "lowToHighDispatch",
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
                          active ? 'bg-teal-100' : 'text-gray-900'
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
        <div className="ul mx-auto w-9/12 py-3 sm:py-24 sm:px-0 lg:px-0">
            <h1 className="mt-4 text-productscenter text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">Results</h1>
            
            <div className="mt-12 w-full">        
                <section aria-labelledby="cart-heading">
                       { transformProducts().slice(indexOfFirstShipment , indexOfLastShipment).map((product) => (  
                        <ul className=" divide-y divide-gray-200 border-t border-b border-gray-200 p-1">                        
                              <li key={product.id} className="flex py-6 product-list">
                                <div className="object-contain flex-shrink-0">
                                    <img
                                    src={product.image_url}
                                    alt={product.imageAlt}
                                    className="h-48 w-48 bg-cover rounded-md object-contain object-center sm:h-48 sm:w-48"
                                    />
                                </div>
                                <div className="px-10 ml-4 flex flex-1 flex-col sm:ml-6">
                                    <div>
                                    <div className="flex justify-between">
                                        <h4 className="text">
                                            {product.name}
                                        </h4>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
</svg> */}
                                        <a target='blank' href={product.website_url} className="ml-4 store-link text-white font-medium no-underline px-4 py-2 rounded button shadow">Go to Store</a>
                                        

                                    </div>
                                    <p className="mt-0 text-lg">From {product.website_name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                                    </div>

                                    <div className="flex flex-1 items-end justify-between">
                                        <p className="text-2xl font-medium ">
                                        <span>Price: ${product.price}</span>
                                        </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between">
                                        <p className="text-sm font-medium">
                                        <span>Delivery Cost: ${product.delivery_cost}</span>
                                        </p>
                                    </div>
                                </div>
                            </li> 
                            </ul>
                          ))}
                </section>     
            </div>                           
            <Paginate productsPerPage={productsPerPage} totalProducts={transformProducts().length} paginate={paginate} />                     
        </div>                  
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Search History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul className="divide-y divide-gray-100">
          {searches.map((search) => (
            <li key={search.id} className="flex justify-between py-3">
              <button onClick={() => {searchHistory(search.query) ;handleClose()}} className="mt-0 truncate text-xl leading-5">{search.query}</button>
            </li>
          ))}
        </ul>
        </Modal.Body>
      </Modal>
    </div>
    
    )
    }
    </div>
  )
}

export default SearchPage