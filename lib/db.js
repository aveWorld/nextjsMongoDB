const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: "34.89.192.47",
    database: "users",
    user: "fanatic",
    password: "vbif22"
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