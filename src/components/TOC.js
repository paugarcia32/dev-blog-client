import "../styles/TOC.css";
import { FaList, LiaHashtagSolid } from "react-icons/fa";

import { useEffect, useState } from "react";

function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeHeadingIndex, setActiveHeadingIndex] = useState(null);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headerElements = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");

    const headingsData = Array.from(headerElements).map((headerElement) => {
      return {
        level: parseInt(headerElement.tagName[1], 10),
        text: headerElement.textContent,
      };
    });

    setHeadings(headingsData);
  }, [content]);

  const getIndentation = (level) => {
    const baseIndentation = 20; // Píxeles para el nivel h1
    const indentationIncrement = 15; // Píxeles para cada nivel adicional
    return `${baseIndentation + indentationIncrement * (level - 1)}px`;
  };

  const handleHeadingClick = (index) => {
    setActiveHeadingIndex(index);

    // Buscar el texto del encabezado en el contenido
    const headingText = headings[index].text;
    const contentDiv = document.querySelector(".content");

    // Buscar el párrafo que contiene el texto del encabezado y realizar el desplazamiento suave
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

  return (
    <div className="table-of-contents">
      {headings.length > 0 ? (
        <div>
          <div className="title-icon">
            <FaList className="toc-icon" />
            <h2>Contents</h2>
          </div>
          <ul>
            {headings.map((heading, index) => (
              <li
                key={index}
                style={{ marginLeft: getIndentation(heading.level) }}
                className={`heading-level-${heading.level} ${
                  index === activeHeadingIndex ? "active" : ""
                }`}
              >
                <a href="#!" onClick={() => handleHeadingClick(index)}>
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No table of contents available.</p>
      )}
    </div>
  );
}

export default TableOfContents;
