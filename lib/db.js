const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: "mesmerizing-air-282711:europe-west3:participants",
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