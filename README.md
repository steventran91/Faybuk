# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# Development steps

### Authentication 
    1. Login - done, user can login from the the form and gets their data
       * does the API return a session token so that instead of logging in manually via form every time, the user can use the session token to login automatically
       * login should return a session token
       * on repeat page visits (not the /login page), frontend should call the api/session route to get current user data
       * the backend should handle the session token and return user data
    2. 