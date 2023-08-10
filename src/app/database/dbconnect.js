const {uname, password} = process.env
export const connectionStr = `mongodb+srv://${uname}:${password}@cluster0.yu1zz9r.mongodb.net/studentData?retryWrites=true&w=majority`

