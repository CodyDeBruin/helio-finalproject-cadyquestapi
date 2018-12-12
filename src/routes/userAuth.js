
const POST_AttemptLogin = async (req, res) => {
    const body = req.body
    if(body && body.username.toLowerCase() === "ben" && body.password.toLowerCase() === "pepper") {
        res.status(200).json({msg:{Auth:true}}) 
    } else {
        res.status(400).json({msg:{Auth:false}}) 
    } 
}
//
//  ROUTE DEFINITIONS
//  HTTP METHOD, ENDPOINT, CALLBACK
//
//
//

const routes = [
    {type:"post", endpoint:"/login", cb: POST_AttemptLogin },
]

module.exports = {
    routes,
}
