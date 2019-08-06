var request = require('request')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiZW5kcG8xbnQiLCJhIjoiY2p5cHhjbWVqMWZtZTNjcnR1czMwdGZ0NiJ9.0iqRoo5ikOi0jh8aHgep_g&limit=1'

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZW5kcG8xbnQiLCJhIjoiY2p5cHhjbWVqMWZtZTNjcnR1czMwdGZ0NiJ9.0iqRoo5ikOi0jh8aHgep_g&limit=1'
    
    request({
        url: url,
        json: true
    },(error,response)=>{

        if(error){
            callback('Unable to connect', response)
        }else if(response.body.features.length === 0){
            callback('Not found', response)
        }else{
            callback(error, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }

    })
}

module.exports = geocode 