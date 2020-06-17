const Comment = (sequelize, Sequelize) => {
  const commentSchema = {
    name: Sequelize.STRING,
    text: Sequelize.STRING
  };

  return sequelize.define('comment', commentSchema);
};

module.exports = Comment;