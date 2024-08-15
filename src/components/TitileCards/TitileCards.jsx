import React,{useEffect, useRef,useState} from 'react'
import './TitileCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';



const TitileCards = ({ title, catecgory }) => {

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjhkMDNlNDg0Mzk3OGVjZTZjMWE0MjViNWNkOTZjNyIsIm5iZiI6MTcyMzYwOTUwMy4zNzA1NSwic3ViIjoiNjZiYjQyODM0MjliMWY3MjFhYmRiMmIyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.1ck5HKQDMyGX-Ghfb4PGq2_wMX7p4u78umL2OIDAj9U'
    }
  };
  

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft +=event.deltaY;
  }

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${catecgory?catecgory:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

     cardsRef.current.addEventListener('wheel',handleWheel);
  },[])

  return (
    <div className='titilecards'>
      <h2 >{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitileCards
