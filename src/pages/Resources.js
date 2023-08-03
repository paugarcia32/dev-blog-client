import React from 'react';
import '../styles/Resources.css';
import mernImage from '../Assets/MERN.png';
import TableOfContents from '../components/TOC2';

const Resources = () => {
  const pageContent = `
    <p>
        In this project, we have used the MERN Stack, following the SOLID principles, and implementing TypeScript in both the frontend and backend.
      </p>
      <img src="${mernImage}" alt="MERN Stack" className="mern-image" />
      <p>
        The MERN Stack consists of the following technologies:
      </p>
      <ul>
        <li>M - MongoDB (Database)</li>
        <li>E - Express.js (Backend Framework)</li>
        <li>R - React (Frontend Framework)</li>
        <li>N - Node.js (Runtime Environment)</li>
      </ul>
      <p>
        By leveraging the power of MERN Stack, we can build full-stack applications efficiently. Additionally, we have followed the SOLID principles, which are a set of five principles that help in creating scalable and maintainable software applications. The principles are:
      </p>
      <ol>
        <li>Single Responsibility Principle (SRP)</li>
        <li>Open/Closed Principle (OCP)</li>
        <li>Liskov Substitution Principle (LSP)</li>
        <li>Interface Segregation Principle (ISP)</li>
        <li>Dependency Inversion Principle (DIP)</li>
      </ol>
      <p>
        Finally, TypeScript has been used in both the frontend and backend to add static typing to JavaScript, which helps in catching errors early and improving code quality.
      </p>
  `;

  return (
    <div className="resources-container">
      <h1>Resources</h1>
      <div className="main-title-underline"></div>

      <TableOfContents content={pageContent} />
      <div className="terms-content" dangerouslySetInnerHTML={{ __html: pageContent }} />
    </div>
  );
};

export default Resources;
