const express = require ('express')
const app = express()
const port = 5500

app.use(express.json())

app.post('/api/addition', (req,res) => {
    const num1 = parseFloat (req.body.num1)         //ParseFloat makes sure you are working with numbers and not strings
    const num2 = parseFloat (req.body.num2)
    const result = num1 +num2
    res.json({result})                               // Sends back the result as a JSON objekt
})

app.post('/api/subtraction', (req,res) => {
    const num1 = parseFloat (req.body .num1) 
    const num2 = parseFloat (req.body .num2)
    const result = num1 - num2
    res.json({result}) 
})


app.post('/api/multiplication', (req,res) => {
    const num1 = parseFloat (req.body.num1) 
    const num2 = parseFloat (req.body.num2)
    const result = num1 * num2
    res.json({result})
})

app.post('/api/division', (req,res) => {
    const num1 = parseFloat (req.body.num1) 
    const num2 = parseFloat (req.body.num2)
    if (num2 === 0) {
        return res.status (400).json({error: "Division by zero is not allowed"})
    }
    const result = num1 / num2
    res.json({result})
})


app.listen(port, () => 
    {console.log(`Running on port ${port}`)

})