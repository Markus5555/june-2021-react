export default function Comments({items}) {
  return (
    <div>{
      items.map(value=> <div>{value.title}</div>)
    }
    </div>
  );
}