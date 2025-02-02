***4 zero rule***, The 4-zero specificity rule in CSS ensures inline styles, IDs, classes, and elements are consistently calculated for resolving style conflicts.


 0 0 0 0
-last zero stands for number of TAGs, e.g. - h1, p, div etc.
-last second zero stands for number of IDs, 
-second zero stands for number of CLASSes and
-first zero stands for "!important"

Some examples of speciality calculation are as following :-
       /* 0 0 0 2 */
        div h1{
          color: red;
       } 

       /* 0 1 0 1 */
         #wrapper h1{
              color: green;
       } 

       /* 0 0 1 1  */
       .container h1 {
              color: blue;
       } 

       /* 0 0 2 0 */
       .container .b{
           color: red;
       }

        0 1 1 0     - most priority given to this styling coz 110 is max
       
       .container #a{
           color: blue;
       }

       /* 0 1 0 0 */
       #a{
           color: green;
       }

################################################################################################

***em Vs rem***                                 [side node :- default font-size of a doc is 16px.]

em:Relative to the font size of its closest parent element.

rem:Always relative to the root element's (<html>) font size.

################################################################################################

vh and vw
They are relative units based on the viewport size (the visible area of a webpage).

# Viewport Height (vh):

1vh = 1% of the viewport height.
Example: If the viewport height is 800px:
50vh → 50% of 800px = 400px.


# Viewport Width (vw):

1vw = 1% of the viewport width.
Example: If the viewport width is 1200px:
50vw → 50% of 1200px = 600px.

################################################################################################

# Why display: inline-block is Used in CSS:
---Combines Features of inline and block:
Behaves like inline (does not start on a new line and allows elements to sit side by side).
Allows setting width, height, padding, and margin like a block element.

---Use Cases:
Creating horizontally aligned elements with customizable size (e.g., navigation menus, buttons, or grid items).
Adding spacing around inline elements while keeping them on the same line.

---Advantages:
Enables responsive layouts without breaking into multiple lines.
Easier control of dimensions compared to pure inline elements.

################################################################################################





