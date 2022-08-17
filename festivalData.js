const axios = require('axios')
const serviceKey = require('./config/keys')
const OpenAPI = require('./config/url')


const festivalData = async(req, res) => {
    const url = OpenAPI.festivalUrl
    const ServiceKey = decodeURIComponent(serviceKey.publicPortalKey)
    try {
        const response = await axios.get(url, 
            {
                params :
                {
                    resultType : 'json',
                    numOfRows : '30',
                    serviceKey : ServiceKey
                }
            }
            )
            const data = response.data.getFestivalKr.item
            res(undefined,data)
    } catch(error){
        console.log('error broke out : ', error)
    }
}
module.exports = festivalData