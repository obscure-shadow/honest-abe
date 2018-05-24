const api = require("./api/apiManager.js")

const makeCards = () => {
    const politicians = api.getAllObjects("politician").then( (politicians) => {
        const votes = api.getAllObjects("vote").then( (votes) =>{
            const bills = api.getAllObjects("bills").then( (bills) =>{
                politicians.forEach(p => {
                    $("#card-container").append(
                        `<div>
                                <h1> ${p.name}</h1>
                                <p> ${p.district}</p>
                                <p> ${p.party}</p>
                            <h3 id="sponsored-bills"> Sponsored Bills </h3>
                        </div>
                        `
                    )
                    votes.forEach( v => {
                        if (v.voter === p.id){
                            bills.filter()
                        }
                    })
                })
            })
        })
    })
}
makeCards()