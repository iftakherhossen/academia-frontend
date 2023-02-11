import SearchBar from 'material-ui-search-bar';
import React from 'react';

const SearchBarWrapper = ({ searchedValue, requestSearch, cancelSearch, searchedResult, shuffledJournals, resultSlicedValue }) => {
     const pattern = new RegExp(searchedValue, "gi");

     return (
          <div className="mb-8">
               <div className="w-2/3 xl:w-[60%] mx-auto p-5">
                    <SearchBar
                         value={searchedValue}
                         onChange={(searchedValue) => requestSearch(searchedValue)}
                         onCancelSearch={() => cancelSearch()}
                         placeholder="Search Journals..."
                         className="font-semibold text-lg"
                         style={{ borderRadius: 25, fontSize: '1.3rem', fontWeight: 600, boxShadow: 'none', border: '2px solid #1EB2A6' }}
                    />
               </div>
               <div className="text-center">
                    <p className="text-lg font-semibold text-slate-400">
                         {searchedResult.length > 0 ? `Results Found: ${searchedResult.length}` : "Most Popular Journals"}
                    </p>
               </div>
               <div className="max:h-[13rem] mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 px-4 md:px-0 text-black">
                         {
                              searchedResult.length > 0 ? searchedResult.slice(0, resultSlicedValue).map(({ title, url }) => <a href={url} key={title}>
                                   <div className="card bg-white h-full">
                                        <div className="card-body px-5 py-4">
                                             <h2 className="text-xl font-semibold">
                                                  {title.toLowerCase().includes(searchedValue.toLowerCase()) ? <mark>{title}</mark> : title}
                                             </h2>
                                        </div>
                                   </div>
                              </a>) : shuffledJournals.slice(0, resultSlicedValue).reverse().map(({ title, url }) => <a href={url} key={title}>
                                   <div className="card bg-white h-full">
                                        <div className="card-body px-5 py-4">
                                             <h2 className="text-xl font-semibold">{title}</h2>
                                        </div>
                                   </div>
                              </a>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default SearchBarWrapper;