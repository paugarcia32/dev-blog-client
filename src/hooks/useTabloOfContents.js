import { useEffect, useState } from "react";

const useTableOfContents = (content) => {
  const [headings, setHeadings] = useState([]);
  const [activeHeadingIndex, setActiveHeadingIndex] = useState(null);

  useEffect(() => {
    const headerElements = getHeaderElements(content);
    const headingsData = getHeadingsData(headerElements);
    setHeadings(headingsData);
  }, [content]);

  const getHeaderElements = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    return doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
  };

  const getHeadingsData = (headerElements) => {
    return Array.from(headerElements).map((headerElement) => {
      return {
        level: parseInt(headerElement.tagName[1], 10),
        text: headerElement.textContent,
      };
    });
  };

  const getIndentation = (level) => {
    const baseIndentation = 20;
    const indentationIncrement = 15;
    return `${baseIndentation + indentationIncrement * (level - 1)}px`;
  };

  const handleHeadingClick = (index) => {
    setActiveHeadingIndex(index);
    const headingText = headings[index].text;
    scrollToHeading(headingText);
  };

  const scrollToHeading = (headingText) => {
    const contentDiv = document.querySelector(".content");
    if (contentDiv) {
      const paragraphsWithHeading = contentDiv.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6"
      );
      for (let i = 0; i < paragraphsWithHeading.length; i++) {
        if (paragraphsWithHeading[i].textContent === headingText) {
          paragraphsWithHeading[i].scrollIntoView({ behavior: "smooth" });
          break;
        }
      }
    }
  };

  return {
    headings,
    activeHeadingIndex,
    handleHeadingClick,
    getIndentation,
  };
};

export default useTableOfContents;
