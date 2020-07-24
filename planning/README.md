# Project Overview

## Project Links

Backend via Heroku:
- [Root](https://immense-tor-64805.herokuapp.com/api)
- [Find/Create User](https://immense-tor-64805.herokuapp.com/api/user)
- [Find/Create Transaction](https://immense-tor-64805.herokuapp.com/api/transaction)


## Project Description

Our idea was to build a React Native tracking application for items/money you've lent. Often, when lending something to a friend, you forget about the item and never see it again. Hence, the name of our app, 'Forgotten'. With this app, we hope your items are never forgotten again. Style/structure was inspired by Venmo. 

## User Stories

- As a user, I should be able to track items/money I've lent to others.
- As a user, I should be able to see transactions of other people using the app.

## API

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile](https://res.cloudinary.com/dpn6ltns1/image/upload/v1595017437/Project%203/Screenshot_from_2020-07-17_16-21-51_bohmdt.png)


- [React Architecture](https://res.cloudinary.com/dpn6ltns1/image/upload/v1595017445/Project%203/Screenshot_from_2020-07-17_16-21-22_frymj8.png)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP EXAMPLE

- User creates profile
  -- Name of user
  -- username/handle
  -- Optional profile photo
- User can create post
  -- Optional image
  -- Name of item
  -- Date lent
  -- Name of borrower
- Full CRUD available for the post
  -- Returned button
- Store user data in MongoDB deployed by Heroku
- Routes
  -- Sign up/in page
  -- Home Page (feed with all user posts)
  -- User page (just user posts)
  -- Edit account page
- Deploy react app via Netlify/Surge

#### PostMVP EXAMPLE

- Link post to the borrower's account
- Privacy settings
- Image upload - check out Qapital as a potential guide

## Components

App
  Login
  Layout
    Header
      Nav
    Home
      Feed
        Post
    MyProfile
      Feed
        Post
    NewPost
      PostForm
    EditPost
      PostForm
    Footer

##### Time Frames

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

MVP
| Component            | Priority | Estimated Time | Time Invetsted | Actual Time |
| -------------------- | :------: | :------------: | :------------: | :---------: |
| User Creates Profile |    H     |      6hrs      |      -hrs      |    10hrs     |
| User can create post |    H     |      6hrs      |      -hrs      |    20hrs    |
| Full CRUD for post   |    H     |      8hrs      |      -hrs      |    25hrs    |
| Store user data      |    H     |      2hrs      |      -hrs      |    8hrs     |
| Routes               |    H     |      5hrs      |      -hrs      |    15hrs     |
| Total                |    H     |      27rs      |      -hrs      |    78hrs    |

POST MVP
| Component             | Priority | Estimated Time | Time Invetsted | Actual Time |
| --------------------- | :------: | :------------: | :------------: | :---------: |
| Link to another acct. |    M     |      5hrs      |      -hrs      |    17hrs    |
| Privacy Setting       |    L     |      6rs       |      -hrs      |    hrs      |
| Image upload          |    M     |      6rs       |      -hrs      |    hrs      |
| Total                 |    H     |      17rs      |      -hrs      |    17hrs    |

## Additional Libraries

React Native Elements, Expo, FontAwesome 

## Code Snippet

Code snippet you're proud of:
Implemented the React Hook useContext to more efficiently pass props throughout the app.

```
import { createContext } from 'react';

// set the defaults
const UserDataContext = createContext({
    userData: {email: '', handle: '', name: '', _id: ''},
    setUserData: () => {}
});

export default UserDataContext;

```

## Hurdle

PostForm was a shared component, so linking it to EditPost and NewPost was challenging. PostForm needed to display different data based on what the user wanted to accomplish. The solution was to build and add buttons that toggled back and forth between different user options. 
