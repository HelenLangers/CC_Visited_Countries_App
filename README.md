<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT NAME -->
<h3 align="center">World Travel Check List App</h3>

  <p align="center">
    This little project started out as a homework assignment during my time at the CodeClan professional software development bootcamp. I was struggling with my understanding of React and so I kept building upon this fun little project over subsequent weekends.
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#contributing">Contributing</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

I initially designed this app to only have a continent dropdown and a countries dropdown to cement understanding of APIs and the useState and useEffect hooks. Once I got the hang of that, I added in a Leaflet map to show the capital city of the selected country. Once that was working, I added the React-Simple-Maps to colour in a country if it's entered into the 'I've been here' list. Finally, I've added in some routing (which is how you're seeing this page) and local storage for your visited countries. There are a couple of bugs, and I'll keep building on this to further my understanding over time. For a first React project after learning about it for 2-3 weeks, I'm pleased.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* React
* Javascript
* HTML
* CSS
* Router


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

To run this app, you must have: 
* Leaflet Maps
  ```sh
  npm install react react-dom leaflet
  npm install react-leaflet
  npm install -D @types/leaflet
  ```

* React-Simple-Maps
  ```sh
  npm install --save react-simple-maps
  ```

* Router
  ```sh
  npm install react-router-dom
  ```

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:HelenLangers/CC_Week7_weekendhw_countriesapp.git
   ```
2. Navigate via Terminal to the folder
3. Install NPM packages
   ```sh
   npm install
   ```
3. Launch VSCode
   ```sh
   code .
   ```
4. Start the server
   ```sh
   npm start
   ```
6. Open in Chrome: http://localhost:3000
7. To stop the server enter ctrl + c in your Terminal

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Currently, the Leaflet map (which is designed to appear when selecting a country) does not recenter when the selected country changes. I've hidden that component for now. If you want to make use of it, simply uncomment the Mapping element under CountryItem.js
- [ ] Whilst the Leaflet map is hidden, I made an attempt at using the MapChart to show the selected country and it's info. I'd like this to work more than the Leaflet map in the long term.
- [ ] The Map Chart is clickable and will change the selected country BUT only if the clicked country is in the same continent as the previously selected country. This needs fixing and will likely require the removal of the continent dropdown and only hit the API via their 'viewall' JSON.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Helen Langridge - [Twitter](https://twitter.com/HelenCycling) - [LinkedIn](https://www.linkedin.com/in/helen-langridge-62b32b166/)

Project Link: [https://github.com/HelenLangers/CC_Week7_weekendhw_countriesapp](https://github.com/HelenLangers/CC_Week7_weekendhw_countriesapp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [CodeClan](https://codeclan.com/)
* [REST Countries API](https://restcountries.com/)
* [Leaflet](https://react-leaflet.js.org/)
* [React-Simple-Maps](https://www.react-simple-maps.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

