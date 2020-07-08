const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: sql7.freemysqlhosting.net,
    database: sql7353286,
    user: sql7353286,
    password: qIxUhxFlEm
  }
})

exports.query = async query => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}