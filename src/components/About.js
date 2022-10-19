import React from "react";

const About = () => {
    return (
        <section>
            <h2>About This App</h2>
            <p>Thanks for vising this World Travel Check List app.</p>
            <p>This little project started out as a homework assignment during my time at the <a href="https://codeclan.com/courses/professional-software-development/">CodeClan professional software development</a> bootcamp. I was struggling with my understanding of React and so I kept building upon this fun little project over subsequent weekends.</p>
            <p>With this app you can select a continent, then a country, view some information and add it to a 'visited countries list'. Once added to this list, it'll be coloured in blue on a world map. If you've made a mistake, you can remove the country from your 'visited' list.</p>
            <p>I initially designed this app to only have a continent dropdown and a countries dropdown to cement understanding of APIs and the useState and useEffect hooks. Once I got the hang of that, I added in a Leaflet map to show the capital city of the selected country. Once that was working, I added the React-Simple-Maps to colour in a country if it's entered into the 'I've been here' list. Having two maps was cluttered, so I removed Leaflet. Finally, I've added in some routing (which is how you're seeing this page) and local storage for your visited countries. There are a couple of bugs, and I'll keep building on this to further my understanding over time.</p>
            <p>For a first React project after learning about it for 2-3 weeks, I'm pleased.</p>
            <p>Thanks to: <a href="https://restcountries.com/">REST Countries API</a>, <a href="https://react-leaflet.js.org/">Leaflet Mapping</a>, <a href="https://www.react-simple-maps.io/">React Simple Maps</a>
            <p>To view on github, please head <a href="https://github.com/HelenLangers/CC_Week7_weekendhw_countriesapp">here</a>.</p>
            </p>
            <p>Future development:
            <br></br>- Implement useContext</p>
        </section>
    )
}

export default About;