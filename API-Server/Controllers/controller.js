let getHome = (req, res) => {
    try{
        let {name, phone } = req.query

        if (!name || !phone) throw ("requested data was not found please send name and phone number")
        console.log(name)
        console.log(phone)
        res.status(200).json({message: `Hello ${name} !`})

    }catch (err){
        console.log("an error occured",err)
        res.status(400).json({message: err})
    }
}


let getSomewhere = (req, res) => {
    console.log(req.params)
    let {name} = req.params
    res.status(200).json({message: "this is somewhere !"}

    )
}

export{getHome, getSomewhere}