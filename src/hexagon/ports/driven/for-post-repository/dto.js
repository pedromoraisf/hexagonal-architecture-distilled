const PostToCreateDto = {
  title: "",
  content: ""
};

const PostToEditDto = {
  id: "",
  data: {
    title: "",
    content: ""
  }
};

const PostToGetDto = {
  id: ""
};

module.exports = { PostToCreateDto, PostToEditDto, PostToGetDto };
