import chalk from 'chalk'
import express from 'express'
import fetch from 'node-fetch'
// const express = require('express')
// const chalk = require('chalk')

const app = express()
const PORT = 3000
const DATE_SERVICE = process.env.DATE_SERVICE || 'http://localhost:3005/'

app.get('/', (req, res) => {
  fetch(DATE_SERVICE)
    .then((res) => res.json())
    .then((data) => res.send(`Hello, current date is ${data}\n`))
})

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(chalk.green(`Server has been started on port: ${PORT}`))
    })
  } catch (error) {
    console.log(chalk.red(error.message))
  }
}
start()
