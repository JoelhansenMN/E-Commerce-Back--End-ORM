
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const result = await Tag.findAll()
    res.json({ status: "success", payload: result })
  } catch (err) {
    res.status(400).json({ status: "error" })
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const result = await Tag.findByPk(req.params.id)
    res.json({ status: "success", payload: result })
  } catch (err) {
    res.status(400).json({ status: "error" })
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.json({ status: "success", payload: newTag });
  } catch (err) {
    res.status(400).json({ status: "error" });
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    await Tag.update(req.body, { where: { id: req.params.id } });
    res.json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "error" });
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    await Tag.destroy({ where: { id: req.params.id } });
    res.json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "error" });
  }
});

module.exports = router;
