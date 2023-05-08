require('dotenv').config()
const express = require("express");
const app = express();

const path = require('path')
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const { Console } = require('console');

const PORT = process.env.PORT || 3600

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded())
app.use('/', express.static(path.join(__dirname,'public')))
app.use('/', require('./routes/root'))

app.use("/api/auth", require("./routes/authRoutes"));

app.use('/', require('./middleware/verifyJWT'));
app.use("/api/filter",require("./routes/filterRouter"))
app.use("/api/user",require("./routes/userRouter"));
app.use("/api/warning",require("./routes/warningRouter"));
app.use("/api/file",require("./routes/fileRouter"));
app.use("/api/folder",require("./routes/folderRouter"));
app.use("/api/category",require("./routes/categoryRouter"));
app.use("/api/email",require("./routes/emailRouter"));
app.use("/api/upload", require("./routes/uploadRoutes"));

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' })
    } else {
    res.type('txt').send('404 Not Found')
    }
})
    
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))


