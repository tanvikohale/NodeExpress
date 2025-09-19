let persons = [
    {name: "person 1", Phone: 237509784},
    {name: "person 2", Phone: 237509784},
    {name: "person 3", Phone: 237509784},
    {name: "person 4", Phone: 237509784},
]

let getHome = (req, res) => {
    // res.status(200).send("welcome to home page")
    // res.status(200).sendFile("index.html")
    res.status(200).render("index", {data: "Hello I am Soniya Kohale", data1: true , data2: persons})
}

let getAbout = (req, res) => {
    // res.status(200).sendFile("about.html")
    res.status(200).render("about")
}

let postSubmitForm = (req, res) => {
    console.log(req.body)

    req.status(301).redirect("/")
}

export { getHome, getAbout, postSubmitForm }