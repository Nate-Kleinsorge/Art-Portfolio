const db = require('../config/connection');
const { Blog } = require('../models');

const blogData = require('./blogData.json');

db.once('open', async () => {
  await Blog.deleteMany({});

  const technologies = await Blog.insertMany(blogData);

  console.log('Blog seeded!');
  process.exit(0);
});
