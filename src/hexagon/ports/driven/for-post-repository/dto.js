const PostToCreateDTO = {
  title: "",
  content: ""
};

const PostToEditDTO = {
  id: "",
  data: {
    title: "",
    content: ""
  }
};

const PostToGetDTO = {
  id: ""
};

module.exports = { PostToCreateDTO, PostToEditDTO, PostToGetDTO };
