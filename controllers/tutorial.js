const { Tutorial } = require('../models');

exports.createTutorial = (tutorialInfo) => {
  return Tutorial.create(tutorialInfo)
    .then((tutorial) => {
      console.log(JSON.stringify(tutorial, null, 2))
      return tutorial;
    })
    .catch((err) => console.log('Unable to create tutorial', err));
};