export default function AboutMe(){
    return (
        <div className="peronsalInfo" id="aboutMe">
            <p>
                Hello! My name is Austin Joo. I am a recent software engineering graduate with intermediate-level knowledge of software design, development, and testing. I am always seeking to broaden my educational background with excellent analytical, problem-solving, technical, and programming skills. Additionally, I possess other soft skills including being bilingual in my ability to speak Korean, as well as being well rounded with my collaborative experience, multitasking, and effective time management.
                <br></br>
                <br></br>
                As a Full-Stack engineer, my technical skills are centered primarily around but not limited to the following: 
            </p>
            <div id="skillset">
                <ol>
                    <li className="skillList">Dynamic, stateful and stateless frontend user interface development using <strong>React, Handlebars.js, Bootstrap, Foundation, HTML5, and CSS3</strong></li>
                    <li className="skillList">Caching and authentication using <strong>Bcrypt, Cookies, Session stores, IndexedDBs, localstorage, and JSON Web Tokens</strong></li>
                    <li className="skillList">Server development, maintenance, and data-centeric, multi-software communications through the use of <strong>JavaScript (ES6+), jQuery, Express.js, Node.js, npm, Axios, AJAX, and both custom and external RESTful APIs</strong></li>
                    <li className="skillList">Database design, creation, population, and management through both <strong>Mongo</strong> and <strong>MySQL</strong> via queries compiled in JS using <strong>Mongoose, Sequelize, and GraphQL</strong></li>
                    <li className="skillList">Application version control, deployment and monitoring through <strong>git, Heroku, GitHub Pages, MongoDB Atlas, JawsDB_MySQL, </strong> and <strong>AWS</strong></li>
                </ol>
            </div>
            <p>I enjoy spending my free time with family and friends, playing both video and board games, exercising, practicing, teaching, and competing in the sport of TaeKwonDo, eating food, and expericing new things, some of which include skydiving, go-cart racing, and eating Korean pufferish stew.</p>
        </div>
    )
};