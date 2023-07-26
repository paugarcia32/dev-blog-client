// import { useEffect, useState } from "react"
// import Post from "../components/Post"

// export default function IndexPage(){
//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_URL}/post`).then(response =>{
//       response.json().then((posts => {
//         setPosts(posts)
//       }))
//     })
//   })
//   return(
//     <>
//       {posts.length > 0 && posts.map(post => (
//         <Post {...post}/>
//       ))}
//     </>
//   )
// }

// import { useEffect, useState } from "react";
// import Post from "../components/Post";

// export default function IndexPage() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_URL}/post`)
//       .then(response => {
//         // Verificar si la respuesta está en formato JSON antes de analizarla
//         if (!response.ok) {
//           throw new Error("Error al obtener las publicaciones.");
//         }
//         return response.json();
//       })
//       .then(posts => {
//         setPosts(posts);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <>
//       {posts.length > 0 && posts.map(post => <Post key={post._id} {...post} />)}
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import Post from "../components/Post";

// export default function IndexPage() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_URL}/post`)
//       .then(response => {
//         // Verificar si la respuesta está en formato JSON antes de analizarla
//         if (!response.ok) {
//           throw new Error("Error al obtener las publicaciones.");
//         }
//         return response.json();
//       })
//       .then(posts => {
//         console.log("Posts recibidos:", posts); // Agrega este registro para verificar los datos recibidos
//         setPosts(posts);
//       })
//       .catch(error => {
//         console.error("Error al obtener las publicaciones:", error);
//       });
//   }, []);

//   return (
//     <>
//       {posts.length > 0 ? (
//         posts.map(post => <Post key={post._id} {...post} />)
//       ) : (
//         <p>No hay publicaciones disponibles.</p>
//       )}
//     </>
//   );
// }

import { useEffect, useState } from "react";
import Post from "../components/Post";

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
      {posts.length > 0 ? (
        posts.map(post => <Post key={post._id} {...post} />)
      ) : (
        <p>No hay publicaciones disponibles.</p>
      )}
    </>
  );
}
