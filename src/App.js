import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  state = {
    isLoading: true,
    movies : [],
  };

  getMovies = async () => {
    const { //ES6에서 사용 구조 분해 할당
      data : {
        data : {movies},
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies , isLoading : false}); //ES6 state와 await 와 같으면 축약형으로 써도 가능

  }


  componentDidMount() {
   // setTimeout(() => {
    //  this.setState({ isLoading : false});
    //}, 6000);
    
   // axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.getMovies();   
  }

  render() {
    const { isLoading } = this.state;

    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }

}


export default App;
