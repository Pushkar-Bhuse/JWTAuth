# JWTAuth

### An Application to authenticate users using JSON Web Tokens.

## Functionality:
1) Logging in existing users by using generated jwt stored in browser memory.
2) Adding new users and storing them to the database by creating a new jwt.

## Working:
A JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. In JWT authentication, whenever a user is logged in, the authentication server creates a web token which comprises of a header, payload and signature. This token is stored in the users local browser storage (a characteristic similar to cookies). Henceforth, any request made by a user contains this web token embedded in it. This avoids storing the users authentication logs in a database as done with sessions.
In JWTAuth, whenever a user logs in, JWT authentication provides the user with a unique we token which is stored in the users local browser storage and after that, every request made by this user has this web token embedded in it

## Installation Details:
For Django, install the following packages need to be installed:
* django
* djangorestframework
* djangorestframework-jwt
* django-cors-headers 

For Bootstrap:
* npm install --save bootstrap

Instead of doing the above metioned steps, the user can reactivate the python virtual environment to inclue the printaled dependencies.

## Instructions to run:
* Start the Django server using python manage.py runserver 
* Start the React development server using npm start. 
* Signup or login on the page using the endpoints given below.


If successfully run, it'll greet you with your username on the page.
