import React, { useEffect,useState } from 'react';
import View from './View';

const InfiniteScroll = () => {
    const [response, setResponse] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?` + new URLSearchParams({_limit: 9, _page: page}) )
        const data = await res.json();
        // console.log(data);
        setResponse((oldData) => [...oldData, ...data]);
        setLoading(false);
    }
    useEffect(() => {
        getData();
    },[page])

    const handleInfiniteScroll = async () => {
        if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight){
            // alert(1);
            setLoading(true);
            setPage((prev) => prev + 1);
        }
      
    }

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll)
    },[]);
  return (
    <div>
        <View response = {response}/>
        {loading && <div className='loading'></div> }
    </div>
  )
}

export default InfiniteScroll