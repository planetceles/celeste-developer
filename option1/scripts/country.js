const tbody = document.querySelector("tbody");
const visitor = document.getElementById("visitorTime");

let countries = [];

fetch("countries.json")
.then(response => response.json())
.then(data => {

    countries = data;

    updateTable();

    setInterval(updateTable,1000);

});

function updateTable(){

    tbody.innerHTML = "";

    visitor.innerHTML =
        `Your Local Time: ${new Date().toLocaleString()}`;

    countries.forEach(place=>{

        const date = new Date();

        const time = new Intl.DateTimeFormat("en-US",{

            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit",
            hour12:true,
            timeZone:place.timezone

        }).format(date);

        const fullDate = new Intl.DateTimeFormat("en-US",{

            weekday:"long",
            month:"long",
            day:"numeric",
            year:"numeric",
            timeZone:place.timezone

        }).format(date);

        const hour = Number(new Intl.DateTimeFormat("en-US",{

            hour:"numeric",
            hour12:false,
            timeZone:place.timezone

        }).format(date));

        const business = (hour>=8 && hour<17)
            ? "Open"
            : "Closed";

        const status = (hour>=6 && hour<18)
            ? "🌞 Day"
            : "🌙 Night";

        const offset = getTimeDifference(place.timezone);

        tbody.innerHTML += `

        <tr>

            <td>${place.country}</td>

            <td>${place.city}</td>

            <td>${place.timezone}</td>

            <td>${time}</td>

            <td>${fullDate}</td>

            <td>${offset}</td>

            <td class="${hour>=6 && hour<18 ? "day":"night"}">
                ${status}
            </td>

            <td class="${business==="Open"?"open":"closed"}">
                ${business}
            </td>

        </tr>

        `;

    });

}

function getTimeDifference(timeZone){

    const now = new Date();

    const visitorOffset = -now.getTimezoneOffset()/60;

    const tzDate = new Date(
        now.toLocaleString("en-US",{timeZone})
    );

    const utcDate = new Date(
        now.toLocaleString("en-US",{timeZone:"UTC"})
    );

    const zoneOffset =
        (tzDate-utcDate)/1000/60/60;

    const diff = zoneOffset-visitorOffset;

    if(diff===0)
        return "Same Time";

    return (diff>0)
        ? `+${diff} hrs`
        : `${diff} hrs`;

}