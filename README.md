# My Social Media App

## Table of contents

- [General info](#general-info)
- [Features](#features)
- [Technologies](#technologies)

## General info

My second big original project created in MERN stack with typescript. I decided to make use of the skills I gained from the previous project (Swapbook), but also learn something new. Thats why (comparing to previous project) I used:

- React-Hook-Form except of Formik
- Zod except of Yup
- Prisma except of Mongoose on Backend

Link to video:
https://youtu.be/3ylIUa2QUk4

## Features

- Authentication and authorization (JWT in backend cookie)
- 2 Languages (And possibility to change them whenever somebody want)
- Dark and Light mode
- Infinite Scroll (separated into two custom Hooks, with dynamic queries and pages)
- Creating posts
- Liking and unliking posts
- Commenting posts
- Following and Unfollowing other people (Follows are displayed in Follows column)
- Counters of profile views, likes under Posts, follows etc.
- Searching posts by author or description
- Possibility to see other Person profile
- Desktop and mobile navbars
- Splitted mobile layout
- Dynamic dialogs on desktop (their functionalities are included into mobile menu)

## Technologies

Main libraries and packages I used:

- tools: Vite(migrated from CRA), eslint, babel
- testing: RTL, Vitest
- state management: Redux Toolkit
- UI: Material UI
- Accessibility: Axe/React-core
- Internationalization: i18next
  More in package.json
