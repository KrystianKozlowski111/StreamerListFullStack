var express = require('express');
var router = express.Router();
var Streamer = require('../models/Streamer');

router.get('/', async function (req, res, next) {
  try {
    const streamers = await Streamer.find();
    res.json(streamers);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async function (req, res, next) {
  try {
    const streamer = await Streamer.findById(req.params.id);
    res.json(streamer);
  } catch (err) {
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  try {
    const streamer = new Streamer(req.body);
    const savedStreamer = await streamer.save();
    var io = req.app.get('io');
    console.log('Emitting streamerUpdate event:', savedStreamer);
    io.emit('streamerUpdate', {
      message: 'New streamer added!',
      updatedStreamers: [savedStreamer],
    });

    console.log('New streamer added:', savedStreamer);

    res.json(savedStreamer);
  } catch (err) {
    console.error('Error adding new streamer:', err);
    next(err);
  }
});

router.put('/:id/vote', async function (req, res, next) {
  try {
    const streamer = await Streamer.findById(req.params.id);
    if (req.body.upvote) {
      streamer.upvotes += 1;
      if (req.body.changeVote) {
        streamer.downvotes -= 1;
      }
    } else {
      streamer.downvotes += 1;
      if (req.body.changeVote) {
        streamer.upvotes -= 1;
      }
    }
    const updatedStreamer = await streamer.save();
    var io = req.app.get('io');
    io.emit('streamerUpdate', {
      message: 'Streamer upvote/downvote!',
      updatedStreamers: [updatedStreamer],
    });

    res.json(updatedStreamer);
  } catch (err) {
    console.error('Error updating streamer:', err);
    next(err);
  }
});

module.exports = router;
