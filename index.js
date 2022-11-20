import app from './server.js'


app.get('/', (req, res, next) => {
  res.send('Hello World!')
})


app.listen(4000, () => {
  console.log('Server running on port 4000')
})