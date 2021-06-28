import './App.css';
import { Component } from 'react';
import {PostCard} from './components/PostCard'

class App extends Component {

    state = {
      posts: []
    };
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json()) //convertendo para json que retorna outra promisse
      .then (posts => this.setState({posts})) // setando os posts
  }

render(){
  const {posts} = this.state;
  return (
    <div className="App">
      {posts.map(post =>(
        <PostCard
          key={post.id}
         post = {post}/>
      ))}
    </div>
  );
}
}

export default App;
