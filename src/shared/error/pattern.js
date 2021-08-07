const makeErrorPattern = (
  e = {
    type: "",
    payload: ""
  }
) => JSON.stringify(e);

module.exports = makeErrorPattern;
