# FoodApp

FoodApp is a webpage where you can order foods from different restaurants.

app component

-header

- logo
- navigation bar

-body

- search
- restaurant container
- rest card - name - rating - delivery time - cuisines - area - cost for two

-footer

- copyright
- address
- contact
- links

Facing issue--

1. while importing the react router componetnts and functions
   V7 of react router is not compatible with react-router-dom package

C:\Users\MURUGAN.V\Desktop\React-Webapp\node_modules\react-router-dom\dist\index.mjs:13:48
12 | // index.ts

13 | import { HydratedRouter, RouterProvider } from "react-router/dom";
| ^^^^^^^^^^^^^^^^^^
14 | export \* from "react-router";
15 | export {

    FIX for this -
    npm uninstall react-router-dom
    npm install react-router
    import { createBrowserRouter, RouterProvider, Outlet } from "react-router"

github repo- https://github.com/remix-run/react-router/issues/13097
