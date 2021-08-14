const routeAdapter = (req, res) => ({
  ok: (data) =>
    res.status(200).json({
      statusCode: 200,
      body: data
    }),
  badRequest: (message = "") =>
    res.status(404).json({
      statusCode: 404,
      body: {
        message
      }
    }),
  serverError: (message = "Internal server error") =>
    res.status(500).json({
      statusCode: 500,
      body: {
        message
      }
    }),
  payload: {
    ...req.query,
    ...req.params,
    ...req.body
  }
});

module.exports = routeAdapter;
