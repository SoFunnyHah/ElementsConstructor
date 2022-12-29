const express = require('express');
const { Element } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  const elementName = req.body.input;
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
    res.sendStatus(500);
  }
});

module.exports = router;
