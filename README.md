# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [https://github.com/Naveen39O/AdviceGeneratorApp](https://github.com/Naveen39O/AdviceGeneratorApp)
- Live Site URL: [https://naveen39o.github.io/AdviceGeneratorApp/](https://naveen39o.github.io/AdviceGeneratorApp/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I have learnt handling API request using axios.
I have also learnt using useState hook for storing the advice, error state and loading state.

```js
const [adviceState, setAdvice] = useState(initialState);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");

  const handleClick = () => {
    setIsLoading(true);
    axios.get("https://api.adviceslip.com/advice")
      .then((res) => 
        {
          setAdvice(res.data.slip); 
          setIsLoading(false);
          setError("");
        })
      .catch((error) => 
        {
          console.log(error);
          setError(error);
          setIsLoading(false);
        });
  }
```
I have learnt to use shadow effect 

```css
.dice-button:hover{
  box-shadow: 2px 2px 30px 1px $neon-green-blur, -2px -2px 30px 1px $neon-green-blur;
}
```

## Author

- Website - [Naveen Ongole](https://github.com/Naveen39O)
- Frontend Mentor - [Naveen Ongole](https://www.frontendmentor.io/profile/Naveen39O)


