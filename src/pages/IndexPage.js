import { useEffect, useState } from "react";
import Post from "../components/Post";
import FilteredPosts from "../components/FilteredPosts";

export default function IndexPage() {


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_URL}/post`);
        if (!response.ok) {
          throw new Error("Error al obtener las publicaciones.");
        }
        const postsData = await response.json();
        console.log("Posts recibidos:", postsData);
        setPosts(postsData);
      } catch (error) {
        console.error("Error al obtener las publicaciones:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
    <div className="layout">


        <FilteredPosts/>


    </div>

    </>
  );
}