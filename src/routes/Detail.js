import { useParams } from "react-router-dom";
import {useEffect} from 'react';

const Detail = () =>{
    const getMovie = async() => {
        const json = await ( await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`)).json();
        console.log(json);
    }
    const {id} = useParams();
    useEffect(()=>{
       getMovie();
    },[]);
    console.log(id);
    return <h1>Detail</h1>
}
export default Detail;