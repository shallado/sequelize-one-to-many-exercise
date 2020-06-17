const { Tutorial } = require('../models');

exports.createTutorial = (tutorialInfo) => {
  return Tutorial.create(tutorialInfo)
    .then((tutorial) => {
      console.log(JSON.stringify(tutorial, null, 2))
      return tutorial;
    })
    .catch((err) => console.log('Unable to create tutorial', err));
};

exports.findTutorial = (tutorialId) => {
  return Tutorial.findByPk(tutorialId, { include: ['comments'] })
    .then((tutorial) => {
      if (!tutorial) {
        console.log('No tutorial found');
      }

      return console.log(JSON.stringify(tutorial, null, 2));
    })
    .catch((err) => console.log(err));
};