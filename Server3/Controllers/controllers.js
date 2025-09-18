let data = [
    { name: "Soniya" , city: "Nagpur"},
    { name: "Riya" , city: "Nagpur"},
]

let GetHome = (req , res ) => {
    res.status(200).json({ message: "hello user", context: "this is a response object send to a json response with a status code of 200", data })
}

let GetAnotherRoute = (req, res) => {
    res.status(200).send("hello user again !")
}

export {GetHome, GetAnotherRoute}