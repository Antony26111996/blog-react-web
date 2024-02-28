import React from 'react'
import What from '../Images/react.webp'
import Jsx from '../Images/jsx.webp'
import Component from '../Images/component.png'
import Vs from '../Images/vs.jpg'
import local from '../Images/local.jpg'
import Map from '../Images/map.avif'
import Condition from '../Images/condition.jpg'
import Style from '../Images/style.jpeg'
import Route from '../Images/route.png'
import Api from '../Images/api.png'
import Asy from '../Images/asy.jpg'
import Await from '../Images/await.jpg'
import Hooks from '../Images/hooks.jpg'
import Use from '../Images/use.png'
import { Link } from 'react-router-dom';
import singlepost from '../singlepost'

export default function post() {
  return (
    
    <div className='posts'>
      <div className='subpost'>
        <img className='postimg' src={What} alt="what is react"/>

        <div className='postinfo'>
          <div className='postcat'>
            <span className='postcats'>React</span>
            <span className='postcats'>Blog</span>
          </div>
          <span className='posttitle'>
            What is React.js?
          </span>
          <hr/>
          <span className='postdate'>1 hour ago</span>
        </div>
        <p className='postdisc'>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality</p>
        <a href='/singlepost' className='seemorelink'>See more...</a>
        
        </div>


        <div className='subpost'>
        <img className='postimg' src={Jsx} alt="what is react"/>

           <div className='postinfo'>
            <div className='postcat'>
            <span className='postcats'>React</span>
             <span className='postcats'>Blog</span>
          </div>
          <span className='posttitle'>
                  JSX Syntax
            </span>
                <hr/>
          <span className='postdate'>1 hour ago</span>
             </div>
            <p className='postdisc'>JSX (JavaScript Syntax Extension and occasionally referred as JavaScript XML) is a React extension to the JavaScript language syntax[1] which provides a way to structure component rendering using syntax familiar to many developers. It is similar in appearance to HTML.

            React components are typically written using JSX, although they do not have to be as components may also be written in pure JavaScript. JSX is created by Meta (formerly Facebook).[1][2] It is similar to another extension syntax created by Meta for PHP called XHP.</p>
            <a href='/jsx' className='seemorelink'>See more...</a>
            
            </div>



            <div className='subpost'>

<img className='postimg' src={Component} alt="what is react"/>

<div className='postinfo'>
  <div className='postcat'>
    <span className='postcats'>React</span>
    <span className='postcats'>Blog</span>
  </div>
  <span className='posttitle'>
    React.js components.
  </span>
  <hr/>
  <span className='postdate'>1 hour ago</span>
</div>
<p className='postdisc'>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</p>
<a href='/complan' className='seemorelink'>See more...</a>
</div>



<div className='subpost'>

<img className='postimg' src={Vs} alt="what is react"/>

<div className='postinfo'>
  <div className='postcat'>
    <span className='postcats'>React</span>
    <span className='postcats'>Blog</span>
  </div>
  <span className='posttitle'>
    Class Vs Functional 
  </span>
  <hr/>
  <span className='postdate'>1 hour ago</span>
</div>
<p className='postdisc'> A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.<br></br>

A class component requires you to extend from React.Component and create a render function which returns a React element. This requires more code but will also give you some benefits which you will see later on.</p>
<a href='/tional' className='seemorelink'>See more...</a>
</div>





<div className='subpost'>

<img className='postimg' src={local} alt="what is react"/>

<div className='postinfo'>
  <div className='postcat'>
    <span className='postcats'>React</span>
    <span className='postcats'>Blog</span>
  </div>
  <span className='posttitle'>
   State Vs Local variable
  </span>
  <hr/>
  <span className='postdate'>1 hour ago</span>
</div>
<p className='postdisc'>State Variables − Variables whose values are permanently stored in a contract storage.<br></br> Local Variables − Variables whose values are present till function is executing.
</p>
<a href='/lock' className='seemorelink'>See more...</a>
</div>





<div className='subpost'>
<img className='postimg' src={Map} alt="what is react"/>

<div className='postinfo'>
  <div className='postcat'>
    <span className='postcats'>React</span>
    <span className='postcats'>Blog</span>
  </div>
  <span className='posttitle'>
    Map function in React.js
  </span>
  <hr/>
  <span className='postdate'>1 hour ago</span>
</div>
<p className='postdisc'>In ReactJs, the maps are used for traversing or displaying the list of similar objects of a component. The map method is a standard JavaScript function and not just a ReactJs feature that could be called on an array. A new array is made using the map method, and a function is called on each element of the array.</p>
<a href='/mapfunction' className='seemorelink'>See more...</a>

</div>



<div className='subpost'>
<img className='postimg' src={Condition} alt="what is react"/>

<div className='postinfo'>
  <div className='postcat'>
    <span className='postcats'>React</span>
    <span className='postcats'>Blog</span>
  </div>
  <span className='posttitle'>
    Conditional Rendering
  </span>
  <hr/>
  <span className='postdate'>1 hour ago</span>
</div>
<p className='postdisc'>Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.</p>
<a href='/rendering' className='seemorelink'>See more...</a>

</div>



<div className='subpost'>
<img className='postimg' src={Style} alt="what is react"/>

<div className='postinfo'>
  <div className='postcat'>
    <span className='postcats'>React</span>
    <span className='postcats'>Blog</span>
  </div>
  <span className='posttitle'>
   Styles to React Component
  </span>
  <hr/>
  <span className='postdate'>1 hour ago</span>
</div>
<p className='postdisc'>Ways to add Styles to React Component<br></br>
1)Add the Global Styles to “index. html” File.
2)Create a Style for Each Individual Component.
3)Adding Inline Style to React Component Elements.
4)Attach style property to JavaScript Style Object.</p>
<a href='/styleto' className='seemorelink'>See more...</a>
</div>



<div className='subpost'>

<img className='postimg' src={Route} alt="what is react"/>

<div className='postinfo'>
  <div className='postcat'>
    <span className='postcats'>React</span>
    <span className='postcats'>Blog</span>
  </div>
  <span className='posttitle'>
    Routing
  </span>
  <hr/>
  <span className='postdate'>1 hour ago</span>
</div>
<p className='postdisc'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works.</p>
<a href='/reactrouter' className='seemorelink'>See more...</a>
</div>



<div className='subpost'>

<img className='postimg' src={Api} alt="what is react"/>

<div className='postinfo'>
  <div className='postcat'>
    <span className='postcats'>React</span>
    <span className='postcats'>Blog</span>
  </div>
  <span className='posttitle'>
    API in React
  </span>
  <hr/>
  <span className='postdate'>1 hour ago</span>
</div>
<p className='postdisc'>REST API stands for Representational State Transfer application programming interface, sometimes referred to as the RESTful API, and it's the primary interface that is used by React. js developers which allows API connections between different parts of an application or service over the internet.</p>
<a href='/apireact' className='seemorelink'>See more...</a>
</div>




<div className='subpost'>

<img className='postimg' src={Asy} alt="what is react"/>

<div className='postinfo'>
  <div className='postcat'>
    <span className='postcats'>React</span>
    <span className='postcats'>Blog</span>
  </div>
  <span className='posttitle'>
  Asynchronous JS
  </span>
  <hr/>
  <span className='postdate'>1 hour ago</span>
</div>
<p className='postdisc'>Ajax is a set of web development techniques that uses various web technologies on the client-side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behaviour of the existing page.</p>
<a href='/asynchronous' className='seemorelink'>See more...</a>

</div>



<div className='subpost'>
<img className='postimg' src={Await} alt="what is react"/>

<div className='postinfo'>
  <div className='postcat'>
    <span className='postcats'>React</span>
    <span className='postcats'>Blog</span>
  </div>
  <span className='posttitle'>
  Async and await.
  </span>
  <hr/>
  <span className='postdate'>1 hour ago</span>
</div>
<p className='postdisc'>"async and await make promises easier to write"<br></br>

async makes a function return a Promise<br></br>

await makes a function wait for a Promise</p>
<a href='/async' className='seemorelink'>See more...</a>

</div>




<div className='subpost'>
<img className='postimg' src={Hooks} alt="what is react"/>

<div className='postinfo'>
  <div className='postcat'>
    <span className='postcats'>React</span>
    <span className='postcats'>Blog</span>
  </div>
  <span className='posttitle'>
    Hooks in React
  </span>
  <hr/>
  <span className='postdate'>1 hour ago</span>
</div>
<p className='postdisc'>Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</p>
<a href='/hooksreact' className='seemorelink'>See more...</a>

</div>



<div className='subpost'>
<img className='postimg' src={Use} alt="what is react"/>

<div className='postinfo'>
  <div className='postcat'>
    <span className='postcats'>React</span>
    <span className='postcats'>Blog</span>
  </div>
  <span className='posttitle'>
  useState, useEffect
  </span>
  <hr/>
  <span className='postdate'>1 hour ago</span>
</div>
<p className='postdisc'>The state can now be used inside functional components that is made possible by the useState hook. Let’s have a look at how we can use useState<br></br>
useEffect is an interesting one. It removes the need for componentDidMount , componentDidUpdate and componentWillUnmount because it handles the use case of all of these life cycle methods.</p>
<a href='/useeffect' className='seemorelink'>See more...</a>
</div>


<footer className='foot'>&copy; Copyright 2023 reserved to Antony Raj</footer>

     </div>
  
  
    
  )
}
