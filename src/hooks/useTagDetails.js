import { useState, useEffect } from "react";

const useTagDetails = (tagId) => {
  const [tagName, setTagName] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/tags/${tagId}`)
      .then((response) => response.json())
      .then((tagData) => {
        setTagName(tagData.title);
      })
      .catch((error) => {
        console.error("Error fetching tag details:", error);
      });
  }, [tagId]);

  return {
    tagName,
  };
};

export default useTagDetails;
