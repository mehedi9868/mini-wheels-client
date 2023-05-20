/* eslint-disable react/no-unescaped-entities */

import { Helmet } from "react-helmet";

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Mini Wheels | Blogs</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-red-500 underline underline-offset-8 text-center my-20" style={{ fontFamily: 'Kalam, cursive' }}>Blogs</h2>

            <div className='m-10 mt-0'>
                <h2 className='text-xl font-bold mb-4'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='text-justify'>
                    <span className="font-bold">access token: </span>
                    An access token is a piece of information that allows a client to access protected resources on a server. It acts as a key that grants permission to perform certain actions or retrieve specific data. Access tokens are typically short-lived and have an expiration time. <br />
                    <span className="font-bold">refresh token: </span>
                    A refresh token is a special token that is used to obtain a new access token when the current access token expires. It helps in refreshing the user's authentication session without requiring them to log in again. Refresh tokens are usually long-lived and can be used to generate new access tokens whenever needed. <br />

                    <span className="font-bold">work process: </span>
                    When a user logs in or authenticates, the server verifies their credentials and generates an access token and a refresh token. Then user can use access the token to access protected resources.When the access token expires, the client can use the refresh token to request a new access token from the server without login again.The server verifies the refresh token and if it is valid, generates a new access token and sends it back to the client. <br />

                    <span className="font-bold">store token: </span>
                    On the client-side access tokens and refresh tokens can be stored in local storage or in an HTTP-only secure cookie. But HTTP-only secure cookie is recommended as it is more secure.
                </p>
            </div>

            <div className='m-10'>
                <h2 className='text-xl font-bold mb-4'>Compare SQL and NoSQL databases?</h2>
                <p className='text-justify'>
                    SQL databases are like organized tables with rows and columns. They follow a structured way of storing data, and you need to define how the data should look beforehand. SQL databases are good for structured data and work well when we have a fixed way of organizing and relating the data. They are commonly used in applications where data consistency and strict relationships are important.

                    NoSQL databases are more flexible. They can store different kinds of data, like documents, key-value pairs, or graphs. They don't require a fixed structure, so we can easily change or add new types of data. NoSQL databases are great when we have lots of unstructured data or when our data is evolving and changing frequently. They are also good for handling large amounts of data and high traffic loads.</p>
            </div>

            <div className='m-10'>
                <h2 className='text-xl font-bold mb-4'>What is express js? What is Nest JS?</h2>
                <p className='text-justify'>
                    <span className="font-bold">Express.js: </span>
                    Express.js is a web application framework for Node.js, a JavaScript runtime. It simplifies the process of building web applications and APIs by providing a set of features and tools. Express.js is lightweight and flexible, allowing developers to handle HTTP requests and responses, define routes, manage middleware, and interact with databases. It is known for its simplicity and minimalistic approach, making it easy to get started with and customize according to specific project requirements. Express.js has a large ecosystem of modules and is widely used for developing server-side applications and APIs in JavaScript or TypeScript. <br />
                    <span className="font-bold">Nest.js: </span>
                    Nest.js, on the other hand, is a progressive Node.js framework for building scalable and efficient server-side applications. It is built with TypeScript and uses modern JavaScript features. Nest.js takes inspiration from Angular, a popular front-end framework, and adopts its architectural patterns and concepts. It provides a structured and modular approach to application development, utilizing decorators, dependency injection, and strong typing. Nest.js offers built-in support for features like routing, middleware, authentication, and database integration. It promotes the use of SOLID principles and facilitates the creation of highly maintainable and scalable applications.</p>
            </div>

            <div className='m-10 mb-20'>
                <h2 className='text-xl font-bold mb-4'>What is MongoDB aggregate and how does it work?</h2>
                <p className='text-justify'>
                    <span className="font-bold">MongoDB aggregate: </span>
                    MongoDB aggregate is a feature that allows us to perform advanced data operations and analysis on our data stored in a MongoDB database. It helps us to process and manipulate our data in meaningful ways.With MongoDB aggregate, we can perform operations like filtering, grouping, sorting, and transforming data. It works by using a sequence of stages, where each stage performs a specific task on the data and passes the result to the next stage.<br />
                    <span className="font-bold">work process: </span>
                    MongoDB's aggregate feature works by applying a series of steps to our data in a MongoDB database. Each step performs a specific operation, such as filtering, grouping, or calculating aggregate values. We can customize these steps to process and analyze our data in meaningful ways. The data flows through the stages, with the output of one stage becoming the input for the next. This allows us to build complex sequences of operations to get the desired results. Overall, MongoDB aggregate helps us manipulate and analyze our data efficiently.</p>
            </div>
        </div>
    );
};

export default Blogs;