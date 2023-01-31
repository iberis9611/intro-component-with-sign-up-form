# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Flexbox
- CSS Grid
- JS

### What I learned

1. Bind event with form in js
```js
let form = document.querySelector('form');
```
2. Create an element
```js
const errorMsg = document.createElement('p');
```
3. Append a new element after another one
```js
element.parentNode.insertBefore(errorMsg, element.nextSibling);
```
4. Insert element into another element
```js
errorMsg.appendChild(pText);
```
5. Remove an element
```js
element.nextSibling.remove();
```
6. Add/remove/toggle class to an element
```js
errorMsg.classList.add('error');
```
7. Use regex expression in JS
```js
const regex = /^\w+@\w+\.(com|cn)$/g;
const email = input.value.trim();
const found = regex.test(email);
if (!found && email.length) {
    promptError(input);
}
```
8.  Use input event to check if the value of an <input> changed
```js
firstName.addEventListener('input', (e) => {
    if (e.target.value !== '') {
        removePrompt(firstName);
    }
});
```
9. Change placehoder's color using CSS pseudo-element ::placeholder
```css
.red::placeholder {
    color: var(--ERROR-COLOR);
}
```