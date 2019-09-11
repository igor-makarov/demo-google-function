const googleIt = require('google-it')

const allowed = ["stratechery", "marco arment", "daring fireball"]

exports.handler = async (event, context) => {
  const query = event.queryStringParameters.query
  if (!query) {
    return { statusCode: 405, body: "Empty not allowed" };
  }

  if (!allowed.includes(query)) {
    return { statusCode: 405, body: `Allowed queries: ${allowed}` };
  }

  const results = await googleIt({'query': query})
  const resultsArray = results.map(link => link['link'])

  return {
    statusCode: 200,
    body: JSON.stringify(resultsArray, null, 2)
  }
}
