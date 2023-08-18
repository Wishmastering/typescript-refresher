import { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";

export default function App() {
  type Location = {
    street: {
      // Define the street structure if needed
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    // Define other properties if needed
  };

  type Login = {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    // Define other properties if needed
  };

  type Name = {
    title: string;
    first: string;
    last: string;
  };

  type Dob = {
    date: string;
    age: number;
  };

  type Registered = {
    date: string;
    age: number;
  };

  type Picture = {
    large: string;
    medium: string;
    thumbnail: string;
  };

  type Id = {
    name: string;
    value: string;
  };

  type Post = {
    cell: string;
    dob: Dob;
    email: string;
    gender: string;
    id: Id;
    location: Location;
    login: Login;
    name: Name;
    nat: string;
    phone: string;
    picture: Picture;
    registered: Registered;
  };

  type PostProps = Post[];
  const [postTitle, setPostTitle] = useState<string | null>("");
  const [data, setData] = useState<PostProps>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);

  const fetchData = async (): Promise<PostProps> => {
    const res = await fetch(
      "https://randomuser.me/api?results=10&seed=charles"
    );
    return res.json();
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    const fetching = async () => {
      try {
        const data = await fetchData();
        setData(data.results);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetching();
  }, []);

  console.log(data);

  // const changeTitle = () => {
  //   setPostTitle(null);
  // };

  return (
    <div>
      Typescript Crash Course Refresher
      <h1>{postTitle}</h1>
      <p>
        {data[0].name.first} {data[0].name.title}
      </p>
      {/* {!loading && !error && <p>{data[0].name.first}</p>} */}
      {/* {!loading && !error && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
      {data.map((user) => (
        <Post id={user.id.value} title={user.email} />
      ))}
      {loading && <h3>Loading...</h3>}
    </div>
  );
}
