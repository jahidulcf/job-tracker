# Asignment 4 : job tracker

live link : [https://jahidulcf.github.io/job-tracker/](https://jahidulcf.github.io/job-tracker/)

git repo : [https://github.com/jahidulcf/job-tracker](https://github.com/jahidulcf/job-tracker)

Answers to Questions
---
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
- getElementById- give the specific element by unique id.
- getElementsByClassName- find all the the elements those have same class name, and it give a html collection. and this is a dynamic list.
- querySelector- select the first element matches depending on it is an id, class or tag name.
- querySelectorAll- select all the elements matches depending on it an id, class name or tag name. this return an node list that not dynamic.


---
2. How do you create and insert a new element into the DOM?

Answer: First select the parent element with `getElementById` then create an element like `document.createElement([add tag])` here tag name is depending on what type of element want to create and put it on a variable. then append the newly created element with parrent.appendChild([newly created element variable name]).

---
3. What is Event Bubbling? And how does it work?

Answer: Event Bubbling is a system to track all parent elements up to it's root(grand grand parents). In DOM every html element is tracked as node. If any event (like click) happened in any descendant it can find the specific parent by going node upward.

---
4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event deligation is passing specification event call or task by tracking node of it's parent node.

    here event passed to sibling by tracking parent
    
    first child > parent node > [1] 
    here parent have two child and index of second child is 1

    parent element
    |
    |first child(click happend)
    |
    |second child(deligate here)

Event deligation helpfull when any element need to perform any event but it need help of parent or other element.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: 
- preventDefault() stop the default behaviour of the event and 
- stopPropagation() stop bubbling the event to the parent.