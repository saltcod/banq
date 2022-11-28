const fs = require('fs')

export default async function handler(req, res) {
  //...
  if (req.method === 'POST') {
    fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
      if (err) throw err
    })
    fs.writeFileSync('./newfile.txt', JSON.stringify(req.body))
    return res.status(200).json({})
  }
  //...
}
