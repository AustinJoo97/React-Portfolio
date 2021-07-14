export default function AboutMe(){
    return (
        <div className="peronsalInfo" id="aboutMe">
            <p>
                Hello! My name is Austin Joo. I am a software engineer and am currently studying javascript-focused, full-stack software development. I completed my undergraduate program of studies at Rutgers University, The State University of New Jersey. I have experience with the following: 
            </p>
            <div id="skillset">
                <ol>
                    <li className="skillList">Dynamic, stateful and stateless frontend user interface development using <strong>React, Handlebars.js, Bootstrap, Foundation, HTML5, and CSS3</strong></li>
                    <li className="skillList">Caching and authentication <strong>Bcrypt, Cookies, Session stores, and JSON web tokens</strong></li>
                    <li className="skillList">Server development, maintenance, and multi-software communications through the use of <strong>Vanilla Javascript, jQuery, ExpressJS, NodeJS, NPM, AJAX, and custom APIs</strong></li>
                    <li className="skillList">Database design, creation, population, and management through both <strong>Mongo</strong> and <strong>mySQL</strong> via queries compiled in JS using <strong>Mongoose, Sequelize, and GraphL</strong></li>
                    <li className="skillList">Application deployment and monitoring through <strong>Heroku, GitHub Pages,</strong> and <strong>AWS</strong></li>
                </ol>
            </div>
            <p>I enjoy spending my free time with family and friends, playing both video and board games, exercising, practicing, teaching, and competing in the sport of TaeKwonDo, eating food, and expericing new things, some of which include skydiving, go-cart racing, and eating Korean pufferish stew.</p>
        </div>
    )
};