import React, { useEffect,useState } from 'react';
import View from './View';

const InfiniteScroll = () => {
    const [response, setResponse] = useState([]);
    const [page, setPage] = useState(0);

    const getData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?` + new URLSearchParams({_limit: 9, _page: page}) )
        const data = await res.json();
        // console.log(data);
        setResponse(data);
    }
    useEffect(() => {
        getData();
    })
  return (
    <div>
        <View response = {response}/>
    </div>
  )
}

export default InfiniteScroll