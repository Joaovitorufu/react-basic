export const PostCard = ({post}) => {
    return (
        
        <div >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
    )
}