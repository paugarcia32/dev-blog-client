import React, { useEffect } from "react";
import "../styles/Resources.css";
import mernImage from "../Assets/MERN.png";
import TableOfContents from "../components/TOC2";

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const colorPalette = [
    { color: "--primary", code: "Primary" },
    { color: "--secondary", code: "Secondary" },
    { color: "--accent", code: "Accent" },
    { color: "--background", code: "Background" },
    { color: "--text", code: "Text" },
    { color: "--text-dim", code: "Text 2" },
  ];

  const colorBoxes = colorPalette
    .map(
      (item) => `
        <div class="color-box" style="background: var(${item.color});">
          ${item.code}
        </div>
      `
    )
    .join("");

  const pageContent = `
    <h2>Color Palette</h2>
    <div class="boxes">
    <div class="color-boxes">${colorBoxes}</div>
    </div>

    <h2>Fonts Used</h2>
    <p class="Merriweather">Merriweather</p>
    <p class="OpenSans">OpenSans</p>
    <p class="Montserrat">Montserrat</p>

    <h2>Technologies Used</h2>
    <p>
      In this project, we have used the MERN Stack, following the SOLID principles, and implementing TypeScript in both the frontend and backend.
    </p>
    <img src="${mernImage}" alt="MERN Stack" className="mern-image" />
    <!-- Rest of your content -->
  `;

  return (
    <div className="resources-container">
      <h1>Resources</h1>
      <div className="main-title-underline"></div>

      <TableOfContents content={pageContent} />
      <div
        className="terms-content"
        dangerouslySetInnerHTML={{ __html: pageContent }}
      />
    </div>
  );
};

export default Resources;
