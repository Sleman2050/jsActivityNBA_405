const nbaTeams = {
    won: {
        "Boston Celtics": [1957, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1968, 1969, 1974, 1976, 1981, 1984, 1986, 2008, 2024],
        "Los Angeles Lakers": [1949, 1950, 1952, 1953, 1954, 1972, 1980, 1982, 1985, 1987, 1988, 2000, 2001, 2002, 2009, 2010, 2020],
        "Golden State Warriors": [1947, 1956, 1975, 2015, 2017, 2018, 2022],
        "Chicago Bulls": [1991, 1992, 1993, 1996, 1997, 1998],
        "San Antonio Spurs": [1999, 2003, 2005, 2007, 2014],
        "Philadelphia 76ers": [1955, 1967, 1983],
        "Detroit Pistons": [1989, 1990, 2004],
        "Miami Heat": [2006, 2012, 2013],
        "Milwaukee Bucks": [1971, 2021],
        "Houston Rockets": [1994, 1995],
        "New York Knicks": [1970, 1973],
        "Toronto Raptors": [2019],
        "Cleveland Cavaliers": [2016],
        "Dallas Mavericks": [2011],
        "Portland Trail Blazers": [1977],
        "Washington Wizards": [1978],
        "Seattle SuperSonics": [1979],
        "Atlanta Hawks": [1958],
        "Sacramento Kings": [1951],
        "Denver Nuggets": [2023]
    },
    neverWon: [
        "Phoenix Suns",
        "Utah Jazz",
        "Brooklyn Nets",
        "Orlando Magic",
        "Indiana Pacers",
        "Charlotte Hornets",
        "Minnesota Timberwolves",
        "Memphis Grizzlies",
        "New Orleans Pelicans",
        "Los Angeles Clippers",
        "Oklahoma City Thunder"
    ]
};

const teamInputElem = document.getElementById("teamInput");
const wonTableBody = document.getElementById("wonTableBody");
const neverWonTableBody = document.getElementById("neverWonTableBody");
const countElem = document.getElementById("count");
let time = 60;
let timerExpired = false;


const Interval = setInterval(function () {
    countElem.textContent = time + " seconds";
    time--;

    if (time < 0) {
        clearInterval(Interval);
        teamInputElem.disabled = true;
        countElem.textContent = "Time is up you can't enter, refresh the page";
    }
    }, 1000);

teamInputElem.addEventListener("keyup", function (e) {



    if (e.key === 'Enter') {
        const team = teamInputElem.value;



        if (nbaTeams.won.hasOwnProperty(team)) {
            addTeamRow(team, wonTableBody);} 


        else if (nbaTeams.neverWon.includes(team)) {
            addTeamRow(team, neverWonTableBody);} 


        else {
            alert(`${team} is not an NBA team`);}
    }
});

function addTeamRow(team, tbodyElem) {
    console.log('We will add ${team} to ${tbodyElem} ')
    const row = tbodyElem.insertRow();
    row.insertCell(0).innerText = team;

    if (nbaTeams.neverWon.indexOf(team) === -1) {
        row.insertCell(1).innerText = nbaTeams.won[team].join(", ");}
}





