const HttpFrameworkMockAdapter = () => ({
  serverError: (message = "Internal server error") => ({
    statusCode: 500,
    body: {
      message
    }
  }),
  ok: (data) => ({
    statusCode: 200,
    body: data
  })
});

module.exports = HttpFrameworkMockAdapter;
