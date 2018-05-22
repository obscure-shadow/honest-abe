const api  = Object.create(null, {
    getAllObjects: {
        value: function (obj) {
            return $.ajax(`http://localhost:8088/${obj}`)
        }
    }
})

module.exports = api