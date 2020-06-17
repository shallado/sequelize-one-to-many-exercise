const { Tutorial } = require('../models');

exports.createTutorial = (tutorialInfo) => {
  return Tutorial.create(tutorialInfo)
    .then((tutorial) => JSON.stringify(tutorial, null, 2))
    .catch((err) => console.log('Unable to create tutorial', err));
};