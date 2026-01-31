# Developer Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## Overview

This repository contains a personal developer portfolio built to showcase projects, technical skills, and professional background.  
The application is designed with a clean layout, responsive design, and modular structure for easy customization.

## Features

- Responsive layout for desktop and mobile devices  
- Dark and light theme support  
- Component-based architecture  
- Easy customization of content and styling  
- Built with modern frontend technologies  

## Technology Stack

- React  
- TypeScript  
- JavaScript  
- SCSS (Sass)  
- npm  

## Getting Started

### Prerequisites

Ensure Node.js is installed:

```bash
node -v


Installation
npm install

Run Locally
npm start


Open the application at:

http://localhost:3000


The page reloads automatically when changes are made.

Project Structure

Key files and directories:

src/
  components/    Reusable UI components
  assets/        Images and static assets
  styles/        SCSS styling files


Content such as text, images, and links can be updated safely without affecting the application logic.

Deployment

This project can be deployed using any static hosting service.
GitHub Pages is recommended.

GitHub Pages Deployment

Update the following in package.json:

{
  "homepage": "https://riteshh08.github.io/react-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}


Install the deployment dependency:

npm install gh-pages --save-dev


Deploy the application:

npm run deploy


The deployed site will be available at:

https://riteshh08.github.io/react-portfolio