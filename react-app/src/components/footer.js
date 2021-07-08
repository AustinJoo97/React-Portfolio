export default function Footer(){
    const divStyle = {
        backgroundColor: "#1F2833",
        width: "1087px",
        textAlign: "center",
        marginLeft: "103px"
    }

    const gitHubStyle = {
        fontSize: '42px',
        color: 'orange'
    }

    const linkedInStyle = {
        marginLeft: '30px',
        fontSize: '42px',
        color: '#66FCF1'
    }

    return(
        <div style={divStyle}>
            <a href="https://github.com/AustinJoo97" target="_blank" rel="noreferrer">
                <i className="fa fa-github" id='githubAnchor' style={gitHubStyle}></i>
            </a>
            <a href="https://www.linkedin.com/in/austin-joo/" target="_blank" rel="noreferrer">
                <i class="fa fa-linkedin-square" id='linkedInAnchor' style={linkedInStyle}></i>
            </a>
        </div>
    )
}