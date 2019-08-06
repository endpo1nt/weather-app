var request = require('request')


const forecast = (latitude, longitude, location, callback) => {
    const url = 'https://api.darksky.net/forecast/5a3d346ea8c49a970206829921328a59/'+latitude+','+longitude
    
    request({
        url: url,
        json: true
    },(error,response)=>{


        if(error){
            callback('Unable to connect', undefined)
        }else if(response.body.error){
            callback('Not found', undefined)
        }else{
            response.body.location = location
            callback(undefined, response.body)
        }
    })
}

module.exports = forecast 