const googleIt = require('google-it')

exports.handler = async (event, context) => {
  // Only allow POST
  if (!event.queryStringParameters.query) {
    return { statusCode: 405, body: "Empty not allowed" };
  }

  const results = await googleIt({'query': event.queryStringParameters.query})
  const resultsArray = results.map(link => link['link'])

  return {
    statusCode: 200,
    body: JSON.stringify(resultsArray, null, 2)
  }
}
