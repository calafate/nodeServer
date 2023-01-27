
module.exports = {
    userHello(req, res){
        res.status(200).send("Hola Usuario")
    },
    userInfo(req, res){
        res.status(201).json({
            name: "juan"
        })
    }
}