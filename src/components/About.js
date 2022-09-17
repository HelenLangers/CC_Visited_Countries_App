import React from "react";

const About = () => {
    return (
        <section>
            <h2>About This App</h2>
            <p>Thanks for vising this World Travel Check List app.</p>
            <p>This little project started out as a homework assignment during my time at the CodeClan professional software development bootcamp. I was struggling with my understanding of React and so I kept building upon this fun little project over subsequent weekends.</p>
            <p>I initially designed this app to only have a continent dropdown and a countries dropdown to cement understanding of APIs and the useState and useEffect hooks. Once I got the hang of that, I added in a Leaflet map to show the capital city of the selected country. Once that was working, I added the React-Simple-Maps to colour in a country if it's entered into the 'I've been here' list. Finally, I've added in some routing (which is how you're seeing this page) and local storage for your visited countries. There are a couple of bugs, and I'll keep building on this to further my understanding over time. For a first React project after learning about it for 2-3 weeks, I'm pleased.</p>
            <p>Thanks to: <a href="https://restcountries.com/">REST Countries API</a>, <a href="https://react-leaflet.js.org/">Leaflet Mapping</a>, <a href="https://www.react-simple-maps.io/">React Simple Maps</a>
            </p>
            <p>Updates: I've since removed the Leaflet map, at least until I can fix a bug on it</p>
        </section>
    )
}

export default About;