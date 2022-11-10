# MyInnoCars (Global Online Digital)

## Front-end coding test (React)

Our team's designer has come up with a new design to show our latest and greatest recharge cars on the website.

Here is how the design look like for desktop and mobile (files are stored under `docs` folder)

### Desktop

![ProductList-Desktop](https://user-images.githubusercontent.com/94373243/201036330-4e356e15-6b7e-41fa-a67d-aa2e7836dc1b.png)

### Mobile

![ProductList-Mobile](https://user-images.githubusercontent.com/94373243/201036354-71818765-12ed-423e-a70b-431dd52d152b.png)


The data required to render the design is under `public/api/cars.json` folder. You need to fetch the data from the client side and render it in the browser. The data looks like this:

```json
[
  {
    "id": "xc90-recharge",
    "modelName": "XC90 Recharge",
    "bodyType": "suv",
    "modelType": "plug-in hybrid",
    "imageUrl": "/images/xc90_recharge.jpg"
  }
]
```

The product owner is telling you that you can generate the links to the learn and shop pages of each car by concatating the `id` of the car to the learn (`/learn/`) and shop (`/shop/`) urls.

Two extra SVG icons are also provided by our designer which are stored under `docs` folder.

## Requirements

- Need to implement this project using ReactJs.
- Browser support is modern ever-green browsers.
- Implement this design using React and Typescript.
- Accessibility is important.
- Code Structure and reusablity is important.

## Bonus Points:

- If you use implement the solution using React NextJS Framework (https://nextjs.org/)
- If you add a filter bar on the top to filter cars by `bodyType`
