import React from 'react';
import axios from 'axios'; //http 통신할 때 json형식으로 값 가져올 수 있게 해줌
import Movie from "../components/Movie.js";
import './Home.css';

class Home extends React.Component {
  
  state = {
    isLoading: true,
    movies : [],
  };

  getMovies = async () => {
    const { //ES6에서 사용 구조 분해 할당
      data : {
        data : {movies},
      }  //await이 axios
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies , isLoading : false}); //ES6 state와 await 와 같으면 축약형으로 써도 가능

  }


  componentDidMount() {
    this.getMovies();   
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
                //className 이유는 JSX이기 때문 (자바스크립트 인지 html 인지 구분 못함)
      <section className="container">
        {isLoading  ? ( // 삼항연산자
          <div className="loader">
            <span className="loader__text">'Loading...'</span>
          </div>
        ) : (
          <div className="movies">
          
         { movies.map((movie) => ( // movie를 map형식으로 가져옴
            <Movie 
            key={movie.id} //prop key 값 가져와야되서 넣어줌
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
            />
          ))}
          </div>
        )}
        </section>
    );
  } 
}


export default Home;
