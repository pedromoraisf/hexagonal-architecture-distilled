const makeErrorPattern = (
  e = {
    type: "",
    payload: ""
  }
) => new Error(JSON.stringify(e));

module.exports = makeErrorPattern;
