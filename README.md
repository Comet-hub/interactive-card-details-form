# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Interactive card details form solution](#frontend-mentor---interactive-card-details-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

<p align="center">
  Desktop
</p>
<p align="center">
  <img src="/public/desktop.png">
</p>

<p align="center">
  Mobile
</p>
<p align="center">
  <img src="/public/mobile.png">
</p>

### Links

- Solution URL: [Interactive card details form](https://github.com/Comet-hub/interactive-card-details-form)
- Live Site URL: [Interactive card details form](https://comet-hub.github.io/interactive-card-details-form/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React hook form](https://react-hook-form.com/) - React library
- [Vite](https://vitejs.dev/) - Development environment

### What I learned

In this project I learned to use the React Hook Form library for the management and validation of forms. I made use of the methods and data provided by the useForm hook to obtain the information from the fields, validate it and display it in real time in the credit card graphics.

```jsx
const {
  register,
  handleSubmit,
  reset,
  formState: { errors, isSubmitSuccessful },
  watch,
} = useForm();
```

Additionally, in the process, I learned to create regular expressions to validate inputs that required a specific format (e.g. only numbers).

```js
const regEx = /^[0-9\s]+$/;
```

```jsx
<input
  {...register("test", {
    pattern: /^[0-9\s]+$/,
  })}
/>
```

### Continued development

In future projects I want to focus on improving the implementation of CSS styles in react (using CSS modules or CSS in JavaScript) and implementing better development practices.

### Useful resources

- [RegExr](https://regexr.com/) - This helped me understand how regular expressions work and test them.

## Author

- Frontend Mentor - [Camilo Castellanos](https://www.frontendmentor.io/profile/tu1ip)
