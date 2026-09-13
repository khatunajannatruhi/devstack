# My Dev Stack

My Dev Stack is an interactive web application designed for software engineers to explore and curate their ultimate technology stack for building modern applications.

## Top Features
1. **Interactive Selection:** Browse technology cards and build your stack with validation against duplicates.
2. **Beautiful Alerts:** Seamless toast notifications for user actions (adding, removing, clearing).
3. **Fully Responsive:** Adapts flawlessly to any screen size from smartphones to large desktop monitors.

## Built With
- React.js
- Tailwind CSS
- Vite
- DaisyUI 
- React Toastify

---

## Conceptual Questions

**1. What is JSX, and why is it used in React?**
JSX stands for JavaScript XML. It allows us to write HTML-like markup inside JavaScript files. It is used because it simplifies the creation of React elements and makes the component structure visually intuitive.

**2. What is the difference between props and state?**
State represents the internal memory of a component that it can update itself. Props are external inputs passed into a component from its parent, and they cannot be modified by the receiving component.

**3. What does the `useState` hook do, and where did you use it in this project?**
The `useState` hook creates a state variable and a function to update it. In this project, I used it to store the fetched array of technologies (`techList`) and the array of items the user chose (`selectedTechs`).

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` handles side effects outside the normal render cycle. I needed it to fetch `techData.json` exactly once when the App component loads, so it doesn't continuously fetch the data on every render.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
A unique `key` tells React exactly which list items are modified, added, or deleted. This allows React's Virtual DOM to efficiently update only the necessary parts of the UI instead of re-rendering the entire list.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means rendering different components based on a boolean state. I used it to display a loading spinner: `isLoading ? <Spinner /> : <TechGrid />`. I also used it to show the empty placeholder when no tech is selected.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Data flows down to children via `props` (e.g., passing a technology object to `TechnologyItem`). To send data back up, the parent passes a function as a prop to the child, and the child calls that function with the data as an argument.
