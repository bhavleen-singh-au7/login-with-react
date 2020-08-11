# Login/SignUp with React

In the learning phase of React, I want to build a simple project which contains:

- Home/Landing Page
- SignUp Page
- Login Page
- Dashboard (which is protected showing user information)

I'm doing this without Database, storing user information on the `DB.json` file which is inside `src` folder.

Also deploying this web app to Heroku because in past I learned to deploy on GitHub Pages and Netlify now learning to deploy on Heroku.

### Following are steps to deploy WebApp to Heroku
- git init
- heroku create `APP_NAME` --buildpack https://github.com/mars/create-react-app-buildpack.git
- git add .
- git commit -m "Your lovely comment"
- git push heroku master
- heroku open
