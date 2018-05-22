const api = require("./api/apiManager.js")

const makeCards = () => {
    const politicians = api.getAllObjects("politician").then( (politicians) => {
    politicians.forEach(p => {
            $("#card-container").append(
                `<div>
                    <h2> Name </h2>
                        <h3> ${p.name}</h3>
                    <h2> District </h2>
                        <p> ${p.district}</p>
                    <h2>Party</h2>
                        <p> ${p.party}</p>
                `
            )
        })
    })
}
makeCards()