# Online Portfolios

Nowadays, having an online portfolio and presence is really important. More importantly, each person has their own preferences towards look and design. The purpose of this app is to gather a multitude of reusable portfolio templates for you to choose from. Three portfolios will be made by us, and the rest are free to download portfolios made by other people online.

Team Members: Lamarr, Jan Markus Milan, Vincent Xie

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

    node@v10.16.0 or higher
    npm@6.9.0 or higher
    git@2.17.1 or higher

---

## How To Download

From your command line, first clone the project:

    # Clone this repository
    $ git clone https://github.com/MLH-Fellowship/ttp-team-6

    # Go into the repository
    $ cd ttp-team-6

    # Remove current origin repository
    $ git remote rm origin

Then you can install the dependencies using NPM:

    # Install dependencies
    $ npm install

    # Start development server
    $ npm start

Once your done, go to this url `http://localhost:3000/` and you will see the website:

![Home Page](https://i.imgur.com/2vD09eO.png)

---

## Navigating To The Portfolio

Click on the `Choose A Portfolio` button, or click on the `Portfolios` tab at the top of the screen to view the custom portfolios. You should see the following screen:

![Portfolios Page](https://i.imgur.com/ieowrVd.png)

Click on any of the pictures and it will lead you to the portfolio.

---

## Adding Your Information

Open the project using a text editor. We recommend using Visual Studio Code. We will be using this text editor to navigate to the file where you can add or update your information.

Go to `src/components/views/MyPortfolio/ChangeYourInfoHere.js`. If done correctly, you should be seeing something like this:

![ChangeYourInfoHere.js](https://i.imgur.com/QhfoTVU.png)

Now, just follow along with the comments to add your information to the portfolio. Saving your changes will update the website in real-time, so you can view the changes you made and see if you like them.

---

## Downloading The Portfolio

Naturally, we only want to download the portfolio. You can delete everything in the `src/components` folder except these:

1. `src/components/containers/index.js`
2. `src/components/containers/MyPortfolioContainer.js`
3. `src/components/routes/`
4. `src/components/views/MyPortfolio`
5. `src/components/views/styles/MyPortfolioView.css`
6. `src/components/views/index.js`
7. `src/components/views/MyPortfolioView.js`

### `src/components/containers/index.js`

Delete everything except this line:

    export { default as MyPortfolioContainer } from "./MyPortfolioContainer";

### `src/components/routes/MyPortfolioContainer.js`

Delete the lines in the `import {} from "../containers` section at the top except this line:

    MyPortfolioContainer,

Delete the Route statements in the Switch statement except this line:
    
    <Route exact path="/myPortfolio" component={MyPortfolioContainer} />

You can change the path for this Route to this:

    <Route exact path="/" component={MyPortfolioContainer} />

### `src/components/views/index.js`

Delete these lines:

    export { default as HomePageView } from "./HomePageView";
    export { default as PortfolioPageView } from "./PortfolioPageView";
    export { default as ExtraPageView } from "./ExtraPageView";

--- 

## Deployment

Now you should be done with your setup. The next step is to put your website online!

You can use [Netlify](https://netlify.com) or [Heroku](https://www.heroku.com) to deploy your website.

## Technologies Used

- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction) - Front-end component library
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-end component library
- [Particles-Bg](https://github.com/lindelof/particles-bg) - React particles animation background

## Acknowledgements

Thanks to MLH Fellowship for giving us the opportunity to work on this project, and thanks to [cobidev](https://github.com/cobidev) for providing some inspiration towards our minimalist portfolio design.
