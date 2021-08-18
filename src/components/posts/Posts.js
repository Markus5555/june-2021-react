export default function Posts({post, chosePosts}) {
  const onClickPosts = () =>{
    chosePosts(post)
  }

  return (
    <div>
    <post chosePosts={post.name} />
<button onClick={onClickPosts}>Posts</button>
    </div>
  );
}