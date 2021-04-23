Important Links
Back-End-Repo: https://github.com/Jamesleeg/Delivery-Deets-server

Deployed API: https://git.heroku.com/ancient-inlet-90052.git

Deployed Client: https://jamesleeg.github.io/Delivery-Deets-client/

DeliveyDeets
Are you tired of reviews letting you down ? Does food delivery in your zip-code make you question the restaurants in your area ?
DeliveryDeets is a website that is free of bought reviews so you can get the inside scoop on the best delivery in town.

Project planning Board

User Stories
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As a signed in user, I would like to see all the DeliveyDeets of my zip
As a signed in user, I would like to see update and delete "deets" that I post

HTML5
SCSS
React
JSX
Bootstrap

### Resources
###### Users
| Verb   | URI Pattern  |Body    |Headers  |  Status | Body |
|--------|--------------|------  |-----  |-------------------|------------|
| POST   | `/sign-up`   |credentials | empty | 201, Created| user
| POST   | `/sign-in`   |credentials | empty | 200 Ok | user w/token
| PATCH  | `/change-password/`|password |token| 204 No Content| user w/token
| DELETE | `/sign-out/`       | empty|token |   201 Created | empty

###### Pictures
| Verb   | URI   |Body    |Headers  |  Status | Body |
|--------|--------------|------  |-----  |-------------------|------------|
| POST   | `/post`   |{} | token | 201, Created| Post Obj
| GET   | `/post`   |n/a | empty | 200 Ok | Dog Obj
| DELETE | `/post/:id` |n/a |token | 200 Ok | n/a
| PATCH | `/post/:id` |Post data | token | 200, Ok | Post Obj

### Unsolved Problems

#### Wireframe
<img width="578" alt="Screen Shot 2021-04-14 at 12 39 19 PM" src="https://drive.google.com/file/d/1SqtiAzqtqORd53s2qwqd_1sUJxj8XbgL/view?usp=sharing">


#### ERD
<img width="348" alt="Screen Shot 2021-04-14 at 12 38 32 PM" src="https://media.git.generalassemb.ly/user/33726/files/eccea780-9c38-11eb-9708-9bf6691e09b8">
