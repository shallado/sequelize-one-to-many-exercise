const { sequelize } = require('./models');
const comment = require('./controllers/comment');
const tutorial = require('./controllers/tutorial');
require('./models');

async function example() {
  const tutorialOne = await tutorial.createTutorial({
    title: 'Tut#1',
    description: 'Tut#1 Description'
  });

  const tutorialTwo = await tutorial.createTutorial({
    title: 'Tut#2',
    description: 'Tut#2 Description'
  });

  const commentOne = await comment.createComment({
    name: 'bezkoder',
    text: 'Good job!'
  }, tutorialOne.id);

  const commentTwo = await comment.createComment({
    name: 'bezkoder',
    text: 'Good job!'
  }, tutorialOne.id);

  const commentThree = await comment.createComment({
    name: 'bezkoder',
    text: 'Good job!'
  }, tutorialTwo.id);

  const commentFour = await comment.createComment({
    name: 'bezkoder',
    text: 'Good job!'
  }, tutorialTwo.id);

  await tutorial.findTutorial(tutorialOne.id);

  await tutorial.findManyTutorials();
}

sequelize.sync({
    force: true
  })
  .then(() => {
    example();
    console.log('Successfully synced models to the database');
  })
  .catch(() => console.log('Unable to sync models to the database'));


