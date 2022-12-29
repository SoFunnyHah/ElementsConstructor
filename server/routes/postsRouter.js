const express = require('express');
const { Element } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log('----!!!----', req.body.input);
  const elementName = req.body.input;
  console.log('element name is', elementName);
  const result = await Element.create({ elementName });
  res.json(result);
});
router.get('/', async (req, res) => {
  const resalt = await Element.findAll();
  res.json(resalt);
});
router.delete('/removal/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Element.destroy({ where: { id } });
    const result = await Element.findAll();
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
