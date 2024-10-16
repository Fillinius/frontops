import express from 'express'
// const express = require('express')

const app = express()
const PORT = 3005

app.get('/', (req, res) => {
  res.send(new Date())
})

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`)
})
