import { useEffect, useState } from "react";

const usePostInfo = (id) => {
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/post/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPostInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching post info:", error);
      });
  }, [id]);

  return { postInfo };
};

export default usePostInfo;
