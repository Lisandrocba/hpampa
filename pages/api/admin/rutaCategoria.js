export default async function Login (req,res){
    const {} = req.body
    switch (req.method) {
        case "POST":{
            
        }

        default:
            res.json({error: "error de servidor"})
    }
}