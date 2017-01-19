# electron-compile-react
> A simple Electron-React app to be used as a boilerplate.

For more Electron resources, see [Awesome-electron](https://github.com/sindresorhus/awesome-electron).

---


This boilerplate uses the following technology:
- [Electron](http://electron.atom.io/ "Electron's Homepage"): framework for native desktop apps using web technologies
- [electron-prebuilt-compile](https://github.com/electron-userland/electron-prebuilt-compile): powered by [electron-compile](https://github.com/electron/electron-compile) to compile JS and CSS
- [React](https://facebook.github.io/react/): the UI
- [Babel](http://babeljs.io/): a JavaScript compiler
- [Semantic-UI-React](http://react.semantic-ui.com/introduction): a responsive UI framework with React components
- [react-devtools](https://github.com/facebook/react-devtools): an extension of Chrome's developer tools for React components. Installed using [electron-devtools-installer](https://github.com/MarshallOfSound/electron-devtools-installer)
- [cross-env](https://www.npmjs.com/package/cross-env): set environment scripts for running the app


![App screenshot](resources/electron-compile-react_screenshot.png)


# Installation

### Prerequisites
- Ensure Node.js and npm are installed. If not, Node can be installed from [here](https://nodejs.org/en/ "Node.js.org").
- Also make sure that Electron is installed globally `npm install -g electron`.

### Install the app
```bash
git clone https://github.com/sparksc/electron-compile-react.git
cd electron-compile-react
npm install
npm start
```


# Project Structure
```
+ css/
+ release/				   Packaged applications by platform
+ resources/			   Project assets (images/icons, etc.)
- src/				       Source directory
 |+ components/		       React components
App.jsx				       Renders the app's react components
index.html				   The entry point of the app
main.js			       Electron configuration
package.json
```


Note that the current configuration for Semantic-UI-React is installed via npm and includes the Semantic UI CDN link in the *index.js* file. To allow for custom theming with Semantic UI, the Semantic UI package would need to be installed and built with Gulp. Refer [here](https://github.com/Semantic-Org/Semantic-UI#install) for instructions on how to install the Semantic UI package.


---


# Editor Configuration
#### Atom
```bash
apm install linter linter-js-standard-jsx react autocomplete-modules javascript-snippets
```

# Other UI Options
The current template uses Semantic-UI-React, but here are a few other front-end frameworks that can be used instead:
- [Semantic UI](http://semantic-ui.com/) or [Semantic-UI-React](http://react.semantic-ui.com/introduction)
- [Material-UI](http://www.material-ui.com/#/)
- [Materialize](http://materializecss.com/)
- [Bootstrap 3](http://getbootstrap.com/)
- [Foundation](http://foundation.zurb.com/)
- [React Desktop](https://github.com/gabrielbull/react-desktop)
- [Photon](http://photonkit.com/)
- [And more...](https://en.wikipedia.org/wiki/CSS_frameworks#List_of_CSS_frameworks "Wikipedia")
