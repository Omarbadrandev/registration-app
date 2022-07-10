# npm 

stands for node package manager, npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.

docs and helpful websites:  
https://www.npmjs.com/
https://docs.npmjs.com/cli/v6/commands/npm

# npm i uuid

installing the uuid allows us to generate ids that of course are different for each entry,


it will be installed in the production dependency -
refer to the package.json file production dependencies to exam the implementation. 

NPM(Node Package Manager) is a package manager of Node.js packages. There is an NPM package called ‘shortid’ used to create short non-sequential url-friendly unique ids. Unique ids are created by Cryptographically-strong random values that’s why it is very secure. It has support for cross-platform like Node, React Native, Chrome, Safari, Firefox, etc

# search for npm packages

use the search for packages bar to find all the related packages to the node package manager they are also ranked by popularity 

https://www.npmjs.com/

# advanced common core modules in node.js


# template literal

Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates. 

# Inheritance

 Inheritance is one of the core concepts of object-oriented programming (OOP) languages: It is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods.

 You can use it to declare different kinds of exceptions, add custom logic to existing frameworks, and even map your domain model to a database.

# Encapsulation

By definition, encapsulation describes the idea of bundling data and methods that work on that data within one unit, like a class in Java. This concept is also often used to hide the internal representation, or state of an object from the outside. This is called information hiding.

# 05TUT Notes

a web server with node.js this web server is built with Node js and no framework will be utilized in order to help us learn more foundational knowledge about nodejs  

# chain ternary statements

https://medium.com/javascript-scene/nested-ternaries-are-great-361bddd0f340


# HTTP Status Codes 

301 : The HyperText Transfer Protocol (HTTP) 301 Moved Permanently redirect status response code indicates that the requested resource has been definitively moved to the URL given by the Location headers. A browser redirects to the new URL and search engines update their links to the resource

parsed: analyze into its parts and describe their syntactic roles.

302 : The 302 status code is a redirection message that occurs when a resource or page you're attempting to load has been temporarily moved to a different location. It's usually caused by the web server and doesn't impact the user experience, as the redirect happens automatically

401: Unauthorized
The HyperText Transfer Protocol (HTTP) 401 Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.

204: No Content success status response code
indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page.

400: bad Request:

The HyperText Transfer Protocol (HTTP) 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400

# Regular Expressions

Regular Expressions cheat sheet: 
https://cheatography.com/davechild/cheat-sheets/regular-expressions/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet

# express.js 

express is by definition an opinionated framework and you can organize your project however you would like

# Bcrypt 

Bcrypt is a popular and trusted method for salt and hashing passwords. You have learned how to use bcrypt's NodeJS library to salt and hash a password before storing it in a database. You have also learned how to use the bcrypt compare function to compare a password to a hash, which is necessary for authentication.

documentation:

https://openbase.com/js/bcrypt/documentation

https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/#:~:text=Bcrypt%20is%20a%20popular%20and,which%20is%20necessary%20for%20authentication.

# Tokens 

Access Token: the access token is given a short Time before it expires for example 5 to 15 minutes.
Refresh Token: the refresh token is given a longer duration before it expires possibly several hours a day or even days while no security measures are perfect we do want to consider the risks of cross site scripting and cross-site request forgery

To Learn more about these Hazards important documentation can be found Here:

- https://owasp.org/www-community/attacks/xss/
- https://owasp.org/www-community/attacks/csrf

Hazards: 
XSS: Cross-Site Scripting
CSRF: CS Request Forgery

To avoid the mentioned risks it is recommended for front-end client applications to only store access tokens in memory so they will be automatically lost when the app is closed they should not be stored in local storage or in a cookie essentially if you can store it somewhere with javascript a hacker can also retrieve it with javascript so just keep access tokens in memory which you might also to as the current application state.

what is JWT and what are the acronym JWTs ?

JWT is an abbreviation for json web Tokens: JWTs can be considered to be a form of user identification that is issued after the initial user authentication takes place when a user completes their login process and they are authenticated our rest api will issue the client application an access token and a refresh token, the access token is given a short time before it expires for example 5 to 15 minutes 

* description of the used refresh token in this api:

our api will issue a refresh tokens in an http only cookie this type of cookie is not accessible with javascript refresh tokens do need to have an expiration which will then require users to login again refresh tokens should not have the ability to issue new refresh tokens because that essentially grants indefinite access if a refresh token falls into the wrong hands so the overall access token process involves issuing an access token during user authorization the users application can then access our rest api's protected routes with the access token until it expires our api will verify the access token with middleware everytime the access token is used to make a request when the access token does expire the user's application will need to send their refresh token to our api's refresh endpoint to get a new access token.

and ofcourse the refresh token is also issued during user authorization our rest api's refresh endpoint will verify the token and cross-reference the refresh token in our database too.

storing a reference to the refresh token in the database will allow refresh tokens to be terminated early if the users decides to log out and again refresh tokens needs to be allowed to expire so indefinite access cannot be gained.

# dotenv 
https://www.npmjs.com/package/dotenv

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology

# cookies Documentation 

https://jwt.io/introduction
http://expressjs.com/en/api.html#res.clearCookie
https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id
https://www.npmjs.com/package/jsonwebtoken
https://www.npmjs.com/package/cookie-parser

# confusion between Authentication concept and Authorization concept

Authentication is the process of verifying who someone is.

Authorization is the process of verifying what resources a user has access to.

https://ui.dev/react-router-url-parameters

https://betterprogramming.pub/how-to-pass-multiple-route-parameters-in-a-react-url-path-4b919de0abbe


# Payload 
Payload is the essential information in a data block that you send to or receive from the server when making API requests. 


# BearerToken
Bearer tokens enable requests to authenticate using an access key, such as a JSON Web Token (JWT). The token is a text string, included in the request header. In the request Authorization tab, select Bearer Token from the Type dropdown list. In the Token field, enter your API key value.