import './App.css';
import { Component } from 'react';
import {PostCard} from './components/PostCard'
import { loadPosts } from './utils/load-posts';

class App extends Component {

    state = {
      posts: []
    };
  
  async componentDidMount(){
  await this.loadPosts();
  }
  loadPosts = async () => {
    const post = await loadPosts();
    this.setState ({posts:post});
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
