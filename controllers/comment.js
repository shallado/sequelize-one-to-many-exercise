const { Comment } = require('../models');

exports.createComment = (commentInfo, tutorialId) => {
  return Comment.create({
    ...commentInfo,
    tutorialId
  })
    .then((comment) => JSON.stringify(comment, null, 2))
    .catch((err) => console.log('unable to create comment', err));
};