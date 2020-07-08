const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: "",
    database: "users",
    user: "fanatic",
    password: ""
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
