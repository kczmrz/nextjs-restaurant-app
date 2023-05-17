# Simple restaurant app in NEXT JS/Typescript/ReduxToolkit/Sass

The application is able to:

●Retrieve the menu from the MONGODB database

●Post an order to the MONGODB database

The application can be expanded in various ways.

## Github Pages
    https://vercel.com/kczmrz/kczmrz-fastfood-app/8kdJE77wmwsJh23dkEjxojr7UHds
    ⚠️Github-Pages version haven't a backend
    
## App Schema
![HowWorkLoadingData](https://user-images.githubusercontent.com/96081508/232546733-8387d454-704f-4a74-80dd-cfecd0eb7e36.png)



## Install and congifure
How to install?
`git clone [LINK]`
`cd [place_where_your_clone_has_been_saved]`
`npm install`
`npm run dev`

In the 'Config.ts' and '.env' files, you can configure the project (MongoDB, describes etc)

### MongoDB
To run your application, you need a MONGODB database with three collections.

![exampleDB](https://user-images.githubusercontent.com/96081508/232546463-a6b5ffb5-7989-4d89-af93-4fda43cb949c.png)


In ".env" you have a 5 variables:
1) Key to your database
2) Name of your database
3) Name of your collection "Products"
4) Name of your collection "Order"
5) Name of your collection "Extras"

**Get API links**
`/api/products`
`/api/extras`


**JSON schema for "Products"**

    {
        "title":"Developer burger!",
        "price":
        [
            {
            "small":17.5,
            "normal":25.55,
            "big":39.5
            }
        ],
        "description":"Meal for a real developer! ",
        "img":0
    },

**JSON schema for "Extras"**

     {
    "title": "Fries",
    "price": 5,
    "description": "additional fries",
    "img": 0
    }
    
Why images are a number?

"In **../src/Images/...**, you have folders where you can add your own images. (Don't forget to edit the index.ts file.)"

## Screens
Desktop:
![full](https://github.com/kczmrz/nextjs-restaurant-app/assets/96081508/22200419-ba63-4e19-be29-20dc462efbf1)


Mobile:
![fullmobile](https://github.com/kczmrz/nextjs-restaurant-app/assets/96081508/fcbd1149-35f9-4fb5-b61d-0bdadcf7ed77)



