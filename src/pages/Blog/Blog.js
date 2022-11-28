import React from 'react';

const Blog = () => {
    return (
        <div className=' m-10'>
            <div className=' mb-5'>
                <h1 className=' text-xl font-semibold text-green-700'>What are the different ways to manage a state in a React application?</h1>
                <p className=' text-green-800 font-semibold'>Keeping such data in the URL allows users to share deep links with others.

                    It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change

                    React Router is a great tool to handle routes and manage the params.

                    The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.

                    Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.

                    We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.

                    Here is an example of saving user preferences locally in the browser or even persist the complete state for one or more of our components.
                    
                    The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.</p>
            </div>
            <div className=' mb-5'>
                <h1 className=' text-xl font-semibold text-green-700'>How does prototypical inheritance work?</h1>
                <p className=' text-green-800 font-semibold' >The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className=' mb-5'>
                <h1 className=' text-xl font-semibold text-green-700'>What is a unit test? Why should we write unit tests?</h1>
                <p className=' text-green-800 font-semibold' >The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className=' mb-5'>
                <h1 className=' text-xl font-semibold text-green-700'> React vs. Angular vs. Vue?</h1>
                <p className=' text-green-800 font-semibold' >Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>
        </div>
    );
};

export default Blog;