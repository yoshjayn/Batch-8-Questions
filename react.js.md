```md
#### ⚛️ React Fundamentals
1. [What is React?](#q1-what-is-react)  
2. [What is a Single Page Application (SPA)?](#q2-what-is-a-single-page-application-spa)  
3. [What are components in React and how are they useful?](#q3-what-are-components-in-react-and-how-are-they-useful)  
4. [What is JSX and why is it used in React?](#q4-what-is-jsx-and-why-is-it-used-in-react)  
5. [What are props and state? (Difference)](#q5-what-are-props-and-state-difference)  
---

## Part 1: Read-Aloud Interview Questions

### Q1: What is React?
React is a **JavaScript library** used to build **fast, scalable user interfaces**, especially for **single-page applications**.  
It focuses on the **View layer of MVC**, follows a **component-based architecture**, and promotes **UI reusability** and **separation of concerns**.  
React uses a **Virtual DOM** and **efficient diffing algorithm** to update only the changed parts of the UI, improving **performance**.  
It follows a **declarative programming model** and enforces **unidirectional data flow**, making applications **predictable and easier to debug**.

---

### Q2: What is a Single Page Application (SPA)?
A Single Page Application is a web application that loads a **single HTML page once** and dynamically updates content using **JavaScript**.  
Navigation does **not cause full page reloads**, resulting in **faster transitions** and a **better user experience**.  
SPAs rely on **client-side rendering**, fetch data asynchronously using APIs, and often use **client-side routing**.  
This approach reduces **server load** and provides an **app-like, smooth interaction experience**.

```

Initial Load → index.html
↓
JavaScript Bundle
↓
Component Rendering
↓
API Calls + UI Updates

```

---

### Q3: What are components in React and how are they useful?
Components are **independent, reusable building blocks** that define the **structure and behavior of the UI**.  
Each component encapsulates its **logic, state, and presentation**, enabling **modularity** and **clean architecture**.  
Components can be **nested, reused, and composed**, which helps in building **scalable and maintainable applications**.  
They improve **readability, testing, maintainability, and team collaboration**, especially in large codebases.

```

Root Component
↓
Parent Component
↓
Child Components

```

---

### Q4: What is JSX and why is it used in React?
JSX (JavaScript XML) is a **syntax extension** that allows writing **HTML-like code inside JavaScript**.  
It improves **code readability and maintainability** by keeping **UI structure and logic together**.  
JSX is **not understood by browsers** and is transpiled by **Babel** into standard JavaScript using `React.createElement()`.  
It encourages a **declarative UI approach** and enables **compile-time error detection**, reducing runtime issues.

```

JSX Syntax
↓ (Babel)
JavaScript Code
↓
Virtual DOM
↓
Real DOM

```

---

### Q5: What are props and state? (Difference)
Props are **read-only data inputs** passed from **parent to child components**, enabling **component communication** and **reusability**.  
They follow **unidirectional data flow** and cannot be modified by the receiving component.  
State represents **mutable internal data** managed within a component and is used to handle **dynamic behavior and interactivity**.  
Changes in state trigger **re-rendering**, keeping the UI in sync with data changes.  
Props are **externally controlled**, while state is **internally managed** by the component.

```

Parent Component
↓ (Props)
Child Component
↓
Internal State

```

---
```
