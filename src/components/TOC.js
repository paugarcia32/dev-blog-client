// import "../styles/TOC.css";
// import { FaList } from "react-icons/fa";
// import { useEffect, useState } from "react";

// function TableOfContents({ content }) {
//   const [headings, setHeadings] = useState([]);
//   const [activeHeadingIndex, setActiveHeadingIndex] = useState(null);

//   useEffect(() => {
//     const headerElements = getHeaderElements(content);
//     const headingsData = getHeadingsData(headerElements);
//     setHeadings(headingsData);
//   }, [content]);

//   const getHeaderElements = (content) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(content, "text/html");
//     return doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
//   };

//   const getHeadingsData = (headerElements) => {
//     return Array.from(headerElements).map((headerElement) => {
//       return {
//         level: parseInt(headerElement.tagName[1], 10),
//         text: headerElement.textContent,
//       };
//     });
//   };

//   const getIndentation = (level) => {
//     const baseIndentation = 20;
//     const indentationIncrement = 15;
//     return `${baseIndentation + indentationIncrement * (level - 1)}px`;
//   };

//   const handleHeadingClick = (index) => {
//     setActiveHeadingIndex(index);
//     const headingText = headings[index].text;
//     scrollToHeading(headingText);
//   };

//   const scrollToHeading = (headingText) => {
//     const contentDiv = document.querySelector(".content");
//     if (contentDiv) {
//       const paragraphsWithHeading = contentDiv.querySelectorAll(
//         "p, h1, h2, h3, h4, h5, h6"
//       );
//       for (let i = 0; i < paragraphsWithHeading.length; i++) {
//         if (paragraphsWithHeading[i].textContent === headingText) {
//           paragraphsWithHeading[i].scrollIntoView({ behavior: "smooth" });
//           break;
//         }
//       }
//     }
//   };

//   return (
//     <div className="table-of-contents">
//       {headings.length > 0 ? (
//         <div>
//           <div className="title-icon">
//             <FaList className="toc-icon" />
//             <h2>Contents</h2>
//           </div>
//           <ul>
//             {headings.map((heading, index) => (
//               <li
//                 key={index}
//                 style={{ marginLeft: getIndentation(heading.level) }}
//                 className={`heading-level-${heading.level} ${
//                   index === activeHeadingIndex ? "active" : ""
//                 }`}
//               >
//                 <a href="#!" onClick={() => handleHeadingClick(index)}>
//                   {heading.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No table of contents available.</p>
//       )}
//     </div>
//   );
// }

// export default TableOfContents;

import React from "react";
import "../styles/TOC.css";
import { FaList } from "react-icons/fa";
import useTableOfContents from "../hooks/useTabloOfContents";

function TableOfContents({ content }) {
  const { headings, activeHeadingIndex, handleHeadingClick, getIndentation } =
    useTableOfContents(content);

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
