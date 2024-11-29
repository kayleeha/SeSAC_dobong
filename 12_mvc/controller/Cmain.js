const Comment = require("../model/Comment");

// get /
exports.main = (req, res) => {
  res.render("index");
};

// get / comments
exports.comments = (req, res) => {
  console.log(Comment.commentInfos());
  res.render("comments", { commentInfos: Comment.commentInfos() });
};

// get / commnt/:id
exports.comment = (req, res) => {
  const comments = Comment.commentInfos();
  console.log(req.params);
  //   console.log(req.query);

  const commentId = req.params.id; // "/comment/:id"에 id가 키 값임, userId였다면 userId로 썼을 것임!

  console.log("commentId", commentId); // 1, 2, 3, 4

  console.log(comments[commentId - 1]); // 댓글의 실제 정보

  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }

  if (isNaN(commentId)) {
    res.render("404");
  }
  res.render("comment", { commentInfos: comments[commentId - 1] });
};
