const mysql = require('serverless-mysql')
const executeQuery = requrie('@tractorzoom/serverless-mysql-utils');


  let config = {
    host: "sql7.freemysqlhosting.net",
    database: "sql7353286",
    user: "sql7353286",
    password: "qIxUhxFlEm"
  }

exports.query = async query => {
  try {
    const results = await executeQuery(query, config);
    return results
  } catch (error) {
    return { error }
  }
}
