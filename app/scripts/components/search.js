import React from 'react';

const Search = ({ results }) => {
  return (
    results.length > 0 && (
      <ul className="search">
        {results.map((result) => (
          <li key={result._id} className="search-item">
            <img src={result.picture} alt={result.name} className='search-img' />
            <div className="search-info">
              <b className="search-name">{result.name}</b>
              <p className="search-about">{result.about}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  )
}

export default Search;
