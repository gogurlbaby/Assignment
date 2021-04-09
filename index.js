const express = require('express')
const cors = require('cors');
const routes = require('./routes')
const { response } = require('express');
  
const server = express();

server.use(express.json())
server.use(cors())

server.use('/api/v1',routes)

const port= 5000


server.listen(port,()=>console.log(`Server is running at port ${port}.......`))