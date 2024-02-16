import React, { useEffect } from 'react'

const InfiniteScroll = () => {
    const [response, setResponse] = useState([]);

    const getData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=0`)
        const data = await res.json();
        console.log(data);
    }
    useEffect(() => {
        getData();
    })
  return (
    <div>InfiniteScroll</div>
  )
}

export default InfiniteScroll