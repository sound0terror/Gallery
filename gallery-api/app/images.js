const express = require('express');
const router = express.Router();
const nanoid = require('nanoid');
const multer = require('multer');
const Image = require('../models/Image');
const User = require('../models/User');
const path = require('path');
const auth = require('../middlewares/auth');

const config = require('../config');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

const createRouter = () => {

  router.get('/', async (req, res) => {

    Image.find().populate('author')
      .then(result => {
        res.send(result);
      }).catch(() => {
      res.status(500).send('Internal server error');
    });
  });

  router.get('/:id', (req, res) => {
    Image.findById(req.params.id)
      .then(result => {
        if (result) res.send(result);
        else res.sendStatus(404);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  });

  router.post('/', [auth, upload.single('photo')], (req, res) => {
    let productData = req.body;

    if (req.file) {
      productData.photo = req.file.filename;
    }
    productData.author = req.user._id;
    const image = new Image(productData);
    image.save().then(result => {
      res.send(result);
    }).catch((error) => {
      res.status(400).send(error);
    });
  });
  router.delete('/:id', auth, async (req, res) => {
    try {
      const user = req.user;
      const currentImage = await Image.findById(req.params.id);
      const currentAuthorId = currentImage.author.toString();
      const userId = user._id.toString();
      console.log(userId, currentAuthorId);
      if(currentAuthorId !== userId) {
        return res.status(403).send({message: 'no authority for this action'});
      }
      await Image.deleteOne({_id: req.params.id});
      res.send({message: 'task has been deleted '});
    } catch {
      res.sendStatus(500);
    }
  });


  return router;
};

module.exports = createRouter;
