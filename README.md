# Movies React

![Movies React](portada.png)

## Project Description

This project is a website developed with React and Vite that allows users to query movies using "The Movie DB" API. The website consists of a cover page and a menu that provides access to the following pages:

- List of top-rated movies
- List of new movies
- List of top-rated movies
- Movie search by title

The results are displayed by showing the movie covers, titles, and release dates. Clicking on a movie leads to another page where you can view the cover and more information about the movie, such as title, rating, release date, description, etc.

## Screenshots

![Movies React](portada.png)
![Movies React](top.png)
![Movies React](search.png)

## Features

- Movie queries by category: top-rated, new, highest-rated.
- Movie search by title.
- Movie details including title, rating, release date, description, etc.

## Technologies Used

- React
- Vite
- CSS
- HTML
- JavaScript

## Installation

Follow these steps to install and run the application:

1. Clone the repository: `git clone https://github.com/your-username/movies-react.git`
2. Enter the project directory: `cd movies-react`
3. Install dependencies: `npm install`
4. Start the application: `npm run dev`
   This will open the project in your browser at http://localhost:[port], allowing you to access the website.

## Usage

Once the website is accessible through a browser, you can navigate to different sections via the top menu by selecting the desired option. The search option allows you to search for a movie, with results appearing about half a second after stopping typing in the search field. Clicking on any of the results will take you to more detailed information about the selected movie.

## Project Structure

```plaintext
.
├── index.html
├── package.json
├── package-lock.json
├── public
│   ├── popcorn.svg
│   └── video.mp4
├── README.md
├── README_test.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── common
│   │   ├── ButtonNav
│   │   │   ├── ButtonNav.css
│   │   │   └── ButtonNav.jsx
│   │   ├── CustomInput
│   │   │   ├── CustomInput.css
│   │   │   └── CustomInput.jsx
│   │   └── header
│   │       ├── Header.css
│   │       └── Header.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── body
│   │   │   └── Body.jsx
│   │   ├── home
│   │   │   ├── Home.css
│   │   │   └── Home.jsx
│   │   ├── login
│   │   │   ├── Login.css
│   │   │   └── Login.jsx
│   │   ├── movie
│   │   │   ├── Movie.css
│   │   │   └── Movie.jsx
│   │   ├── movies
│   │   │   ├── MoviesB.css
│   │   │   ├── Movies.css
│   │   │   └── Movies.jsx
│   │   ├── newmovies
│   │   │   ├── NewMovies.css
│   │   │   └── NewMovies.jsx
│   │   ├── register
│   │   │   ├── Register.css
│   │   │   └── Register.jsx
│   │   ├── search
│   │   │   ├── Search.css
│   │   │   └── Search.jsx
│   │   └── topmovies
│   │       ├── TopMovies.css
│   │       └── TopMovies.jsx
│   └── services
│       ├── apiCalls.js
│       └── useful.js
└── vite.config.js
```

## Contributions

If you want to contribute to this project, follow these steps:

1. Fork the project.
2. Create a branch for your contribution: `git checkout -b feature/new-feature`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to your branch: `git push origin feature/new-feature`
   5`Create a pull request on GitHub.

## License

This project is under the [MIT](LICENSE).

## Examples

Here are some examples of how to use the project:

- To view the list of top-rated movies, visit the /top-rated page.
- To view the list of new movies, visit the /newest page.
- To view the list of highest-rated movies, visit the /top-rated page.
- To search for movies by title, visit the /search page and enter the movie title in the search field.
  When you click on a movie in the results list, a new page will open with more information about the selected movie.

---

Thank you for your interest in Movies React! If you have any questions or issues, feel free to create an [issue](link_to_your_issues_page).
