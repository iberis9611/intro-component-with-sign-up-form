# Frontend Mentor - Intro component with sign up form solution

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

2. Add event listener to multiple elements using forEach()
```js
let inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        if (e.target.value !== '') {
            removePrompt(input);
        }
    });
});
``` 

3. Create an element
```js
const errorMsg = document.createElement('p');
```

4. Append a new element after another one
```js
element.parentNode.insertBefore(errorMsg, element.nextSibling);
```

5. Insert element into another element
```js
errorMsg.appendChild(pText);
```

6. Remove an element
```js
element.nextSibling.remove();
```

7. Add/remove/toggle class to an element
```js
errorMsg.classList.add('error');
```

8. Use regex expression in JS
```js
const regex = /^\w+@\w+\.(com|cn)$/g;
const email = input.value.trim();
const found = regex.test(email);
if (!found && email.length) {
    promptError(input);
}
```

9.  Use input event to check if the value of an <input> changed
```js
firstName.addEventListener('input', (e) => {
    if (e.target.value !== '') {
        removePrompt(firstName);
    }
});
```

10. Change placehoder's color using CSS pseudo-element ::placeholder
```css
.red::placeholder {
    color: var(--ERROR-COLOR);
}
```

11.  How to make 3d button effect
```css
.main_btn {
    width: 100%;
    margin: 1em 0;
    padding: 0;
    font-weight: 600;
    letter-spacing: 0.1em;
    background-color: var(--BUTTON-BGCOLOR);
    color: var(--BUTTON-COLOR);
    border: none;
    border-radius: var(--BORDER-RADIUS);
    outline-offset: 4px;
    cursor: pointer;
}

.front {
    display: block;
    padding: 1em;
    border-radius: var(--BORDER-RADIUS);
    background: var(--BUTTON-FTCOLOR);
    transform: translateY(-0.3em);
}

.main_btn:hover .front {
    background-color: var(--BUTTON-HOVER-COLOR);
}

.main_btn:active .front {
    transform: translateY(-2px);
}
```