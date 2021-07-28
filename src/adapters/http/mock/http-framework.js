const HttpFrameworkMockAdapter = () => ({
  serverError: (message = "Internal server error") => ({
    statusCode: 500,
    body: {
      message
    }
  })
});

module.exports = HttpFrameworkMockAdapter;
