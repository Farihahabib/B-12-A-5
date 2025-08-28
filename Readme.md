**
1.Difference between getElementById , getElementByClassName and querySelector/querySelectorAll is :
By using getElementById we can catch only one element object that can carries the id name.
By  using getElementsByClassName we can catch all the element object that can carries the class name and it returns  an array like object that is HTML collection.
     and
By using  querySelectorAll We can access any where of html file by using .class ,#id ,div>h2 and so on.......  it returns a nodelists.

2.we can create and insert a new element into the DOM by 2 step :
 const new = document.createElement("what i want to create")
 const container =  document.getElementById('whereIwantToInsert');
container.append(new)

3.Event Bubbling is a behavior that works like a reverse tree.At first it catches the target ,then its parents,then its parents....and going on up to html body.It can get access from the parents to child from child to parents.

4.Event Delegation is a process  that if we use event in parents ,we can use it separately for each single children.
The usefullness of it ,it less the number of event listeners and it works automatically for all children whish are added new or before.


5.Difference between preventDefault() and stopPropagatio() is :
preventDefault() is a method that stops the default browser behavior.
stopPropagation()  is a method  that stops the event from bubbling up in the dom reverse tree.
