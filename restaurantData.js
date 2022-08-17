const axios = require('axios')
const serviceKey = require('./config/keys')
const OpenAPI = require('./config/url')


const restaurantData = async(req,res) => {
    const url = OpenAPI.restaurantUrl
    const ServiceKey = decodeURIComponent(serviceKey.publicPortalKey)
    try {
        const response = await axios.get(url, 
            {
                params :
                {
                    resultType : 'json',
                    numOfRows : '149',
                    serviceKey : ServiceKey
                }
            }
            )
            const data = response.data.getFoodKr.item
            res(undefined,data)
    } catch(error){
        console.log('error broke out : ', error)
    }
}
module.exports = restaurantData