# Project Overview

## Project Links

- [Heroku]()
- [Netlify]()

## Project Description

Tracking app for items/money you've lent with the ability to upload images.

## User Stories

- As a user, I should be able to track items/money I've lent to others
- As a user, I should be able to receive reminders about the items/money I've lent
- As a user, I should be able to ask another user for my items/money back

## API

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1593180055/GA%20-%20Project%202/IMG_0332_k20fjj.jpg)
- [Desktop](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1593180150/GA%20-%20Project%202/IMG_0333_gdyvph.jpg)
- [React Architecture](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1593182351/GA%20-%20Project%202/image0_trqvac.jpg)

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
- Image upload

## Components

##### Time Frames

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

MVP
| Component            | Priority | Estimated Time | Time Invetsted | Actual Time |
| -------------------- | :------: | :------------: | :------------: | :---------: |
| User Creates Profile |    H     |      6hrs      |      -hrs      |    hrs      |
| User can create post |    H     |      6hrs      |      -hrs      |    hrs      |
| Full CRUD for post   |    H     |      8hrs      |      -hrs      |   hrs       |
| Store user data      |    H     |      2hrs      |      -hrs      |   hrs       |
| Routes               |    H     |      5hrs      |      -hrs      |    hrs      |
| Total                |    H     |      27rs      |      -hrs      |     hrs     |

POST MVP
| Component             | Priority | Estimated Time | Time Invetsted | Actual Time |
| --------------------- | :------: | :------------: | :------------: | :---------: |
| Link to another acct. |    M     |      5hrs      |      -hrs      |    hrs      |
| Privacy Setting       |    L     |      6rs       |      -hrs      |    hrs      |
| Image upload          |    M     |      6rs       |      -hrs      |     hrs     |
| Total                 |    H     |      17rs      |      -hrs      |     hrs     |

## Additional Libraries

Bootstrap

## Code Snippet

Used .filter to grab the correct image when an artist is selected.

```
 <img className="compPic"
    src={artistPicsUrls.filter((url) => url.name === comps[1].name)[0].url}
    alt={comps[1].name}
/>
```
