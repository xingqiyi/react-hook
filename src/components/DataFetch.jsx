
import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
function DataFetch () {
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState('redux')
  const [search, setSearch] = useState('redux')
  const [isLoading, setIsloading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true)
      const result = await axios(
                `https://hn.algolia.com/api/v1/search?query=${search}`
      )
      setIsloading(false)

      setData(result.data)
    }

    fetchData()
  }, [search])
  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />

      <button type="button" onClick={() => setSearch(query)}>
                Search
      </button>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  )
}
export default DataFetch
