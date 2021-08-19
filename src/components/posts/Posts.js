export default function Posts({post}) {
  // const onClickPosts = () =>{
  //   chosePosts(post)
  // }
  console.log(post)
  return (
    <div>
{/*    <post chosePosts={post.name} />*/}
{/*<button onClick={onClickPosts}>Posts</button>*/}
    <p>{post.title}</p>
    </div>
  );
}