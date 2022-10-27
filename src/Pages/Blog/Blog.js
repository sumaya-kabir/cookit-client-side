import React from 'react';

const Blog = () => {
    return (
        <div className='m-5 p-5 border-start border-success border-3'>
            <article className='mb-3'>
                <h3>What is CORS?</h3>
                <p>
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                <br />
                CORS is typically required to build web applications that access APIs hosted on a different domain or origin. You can enable CORS to allow requests to your API from a web application hosted on a different domain.
                If implemented badly, CORS can lead to major security risk like leaking of API keys, other users data or even much more. A very great example of security risk of CORS misconfiguration is this.
                </p>
            </article>

            <article className='mb-3'>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>
                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                <br />
                There are some authentication system. Some name of them are below here:
                <br />
                <li>STYTCH</li>
                    <li>Ory</li>
                    <li>Supabase</li>
                    <li>Okta</li>
                    <li>PingIdentity</li>
                    <li>Keycloak</li>
                    <li>Frontegg</li>
                    <li>Authress</li>
                    <li>And more</li>
                </p>
            </article>

            <article className='mb-3'>
                <h3>How does the private route work?</h3>
                <p>
                The Route component from react-router is public by default but we can build upon it to make it restricted. We can add a restricted prop with a default value of false and use the condition if the user is authenticated and the route is restricted, then we redirect the user back to the Dashboard component.
                <br />
                The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                
                </p>
            </article>

            <article className='mb-3'>
                <h3>What is Node? How does Node work?</h3>
                <p>
                Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.
                <br />
                It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                <br />
                Node provides access to several important global objects for use with Node program files. When writing a file that will run in a Node environment, these variables will be accessible in the global scope of your file.
                
                </p>
            </article>
        </div>
    );
};

export default Blog;