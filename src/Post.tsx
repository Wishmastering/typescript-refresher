type PostProps = {
  id: string | number;
  title: string;
  toggle?: false;
};

export default function Post({ id, title }: PostProps) {
  return (
    <div>
      <p>New User Below</p>
      <h1>{title}</h1>
      <h3>{id}</h3>
      <button> Toggle</button>
    </div>
  );
}
