# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Open a lightbox gallery by clicking on the large product image
-   Switch the large product image by clicking on the small thumbnail images
-   Add items to the cart
-   View the cart and remove items from it

### Screenshot
![image](https://user-images.githubusercontent.com/72587880/227846019-bc9fc783-1cb5-484d-bfcb-62f3fbee3902.png)


### Links

-   Solution URL: [Solution URL](https://github.com/Robertron624/ecommerce-product-page)
-   Live Site URL: [Live site URL](https://illustrious-souffle-a64116.netlify.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library
-   [Next.js](https://nextjs.org/) - React framework
-   [Tailwind CSS](https://tailwindcss.com/docs/) - For styles
-   [Material UI](https://mui.com/) - for UI components

### What I learned

I learned a lot with this project, primarily the NextJs metaframework, which is a very powerful tool for creating React applications, I also learned how to use Redux in a NextJs project, which is very useful for managing the state of the application, and be able to use it in any component of the application. for styling I used TailwindCSS, which is a very powerful tool for creating styles, and I also used Material UI for some components, such as the carousel, the modal and the mobile menu.

The code belows handles the minicart, it closes when you click outside of it.
```js
    useEffect(() => {
        document.addEventListener("mousedown", closeOutside, true);
    }, []);

    const closeOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setIsMinicartOpen(false);
        }
    }

    <div
      ref={refOne}
      className={`${
      isMinicartOpen ? "" : "hidden"
          } absolute flex flex-col justify-around rounded-lg z-20 py-5 ${
                styles.minicartOuter
          }`}
    >
```

### Continued development

This marks my first intermediate challenge, and I am very happy with the result, I learned a lot and I am very happy with the result, I will continue to improve my skills in React and NextJs, and I will continue to improve my skills in TailwindCSS and Material UI and more complex animations and applications.

### Useful resources

-   [react-material-ui-carousel docs](https://www.npmjs.com/package/react-material-ui-carousel) - This helped me for adding the product image carousel easily.
-   [How to use redux in nextjs](https://blog.logrocket.com/use-redux-next-js/) - This is an amazing article which helped me finally understand how to use redux in nextjs.
-   [Detect Outside Click for Any Element in ReactJS | Most Easiest Method](hhttps://www.youtube.com/watch?v=Tj499K6bGhU) - This helped me for closing the minicart when you click outside of it by using the useRef hook.
## Author

-   Personal Website - [Robert Ramirez](https://robert-ramirez.netlify.app)
-   Frontend Mentor User- [@Robertron624](https://www.frontendmentor.io/profile/Robertron624)
-   Twitter - [@robertdowny](https://www.twitter.com/robertdowny)


## Acknowledgments

Thanks to **Mohammad Faisal** for its wonderful post about how to use redux in a nextjs project, you can check it out at https://blog.logrocket.com/use-redux-next-js/
