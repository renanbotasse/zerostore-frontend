
<h1 style="text-align: center;">
Zero Store
</h1>

<h3 style="text-align: center;">
E-commerce website created with React
</h3>


![Badge](https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT)
![Badge](https://img.shields.io/static/v1?label=NESTJS&message=framework&color=red&style=for-the-badge&logo=NESTJS)
![Badge](https://img.shields.io/static/v1?label=TypeScript&message=framework&color=blue&style=for-the-badge&logo=TypeScript)
![Badge](https://img.shields.io/static/v1?label=Chakra-UI&message=library&color=green&style=for-the-badge)
![Badge](https://img.shields.io/static/v1?label=Storefront-UI&message=library&color=green&style=for-the-badge)


## Description

This project is a modern, responsive e-commerce application built with React and Redux, utilizing the Storefront UI library for a seamless and visually appealing user experience.

## Commands

Clone the repository:: `https://github.com/renanbotasse/zerostore-frontend.git`

Install the dependencies: `npm install`

Start the development server: `npm run dev`

Open your browser and navigate to LocalHost: `http://localhost:5173/`


## ScreenShots
- Landing
  
![Landing](https://github.com/renanbotasse/zerostore-frontend/assets/101360239/9766b89e-a014-4234-913b-c43311494851)

- Ayaneo (Video)

[![Ayaneo](https://img.youtube.com/vi/5sMN0LkMXhc/0.jpg)](https://www.youtube.com/watch?v=5sMN0LkMXhc)


- NavBar

![alt text](https://zerostore.s3.eu-north-1.amazonaws.com/readme/navbar.png)

- Product

![alt text](https://zerostore.s3.eu-north-1.amazonaws.com/readme/product.png)

- Filter + Filter Mobile

![alt text](https://zerostore.s3.eu-north-1.amazonaws.com/readme/filter.png)

- Sales + News Mobile

![alt text](https://zerostore.s3.eu-north-1.amazonaws.com/readme/sales.png)

- About

![alt text](https://zerostore.s3.eu-north-1.amazonaws.com/readme/about.png)

- Contact

![alt text](https://zerostore.s3.eu-north-1.amazonaws.com/readme/contact.png)

- Faq

![alt text](https://zerostore.s3.eu-north-1.amazonaws.com/readme/faq.png)

- Legal

![alt text](https://zerostore.s3.eu-north-1.amazonaws.com/readme/legal.png)

## Directory Structure (Domain-Based Structure)
```
src
├── api
│   └── products
│       └── productFilter.js
│       └── productNew.js
│       └── productSales.js
│       └── productSearch.js
│
├── assets
│   ├── images
│   ├── fonts
│   └── icons
│   └── videos
│
├── components
│   ├── ayaneo
│   │   └── ayaneoConsole.js
│   │
│   ├── common
│   │   ├── Banner
│   │   │   ├── BannerFaq.js
│   │   │   ├── BannerHero.js
│   │   │   ├── BannerLanding.js
│   │   │   └── BannerLegal.js
│   │   │
│   │   ├── Footer
│   │   │   └── Footer.js
│   │   │
│   │   └── Navbar
│   │       ├── NavbarTop.js
│   │       └── SearchNavbarTop.js
│   │
│   ├── contact
│   │   └── ContactForm.js
│   │   └── ContactFormLogic.js  
│   │
│   ├── faq
│   │   └── AccordionFaq.js 
│   │      
│   ├── legalMentions
│   │   └── legalModal.js
│   │
│   └── product
│       ├── ProductCard.js
│       ├── ProductDescription.js
│       ├── ProductDetail.js
│       ├── ProductGallery.js
│       ├── ProductStatus.js
│       ├── filter
|       │   └── sideFilterPanel.js 
|       │
|       ├── new
|       │   ├── ProductNewComponent.js
|       │   └── productNewScrollBar.js
|       │
|       └── sales
|           ├── SalesComponent.js
|           └── SalesProductScrollBar.js
│
├── pages
│   ├── About.js
│   ├── Ayaneo.js
│   ├── Contact.js
│   ├── FAQ.js
│   ├── Filter.js
│   ├── Landing.js
│   ├── LegalMentions.js
│   ├── ProductDetail.js
│   ├── ProductNew.js
│   ├── Sales.js
│   └── Search.js
│
└── store
    ├── slices
    │   ├── filtersSlice.js
    │   └── productSlice.js
    │
    ├── reducers.js
    └── store.js
```

## Architecture

| Item      | Tech |
| ----------- | ------ |
| website host (frontend)      | -  |
| server host (backend)   | -  |
| database for products and orders   | -  |
| website host (frontend)      | -  |
| database for users  | -  |
| storage      | -  |
| local storage for cart   | -  |
| delivery service      | -  |
| warehouse service   | -  |

## Technologies Used
React, TypeScript, Chakra UI, Storefront UI, Redux Toolkit, Bootstrap, Font-Awesome, Framer Motion, Axios, ESlint, MongoDB, PostgreSQL, and AWS S3.  

## Backend Services
NestJS - [GitHub](https://github.com/renanbotasse/zerostore-backend)

## Documentation
- [Trello](https://trello.com/b/YnkmksQ4/zero-store)
- [Confluence](https://renanbotasse.atlassian.net/wiki/spaces/~63d42dd3d73cd1e44e22cc37/pages/98391/Zero+Store)
- [Dbdiagram.io](https://dbdiagram.io/d/zeroStore-65cbc28fac844320ae123457)
- [Miro](https://miro.com/app/board/uXjVNg2EAf4=/)

## Pull Requests
I welcome and encourage all pull requests. 

1 - Fork the repository.

2 - Create a new branch for your feature or bug fix:

`git checkout -b feature-name`

3 - Make your changes and commit them with descriptive messages.

4 - Push your changes to your forked repository:

`git push origin feature-name`

5 - Create a pull request to merge your changes into the main repository.

## Created & Maintained by Renan Botasse
- [Linkedin](https://www.linkedin.com/in/renanbotasse/)
- [Github](https://github.com/renanbotasse)
- [HackNoon](https://hackernoon.com/u/renanb)

# License
This project is licensed under the MIT License.
