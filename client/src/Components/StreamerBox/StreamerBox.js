import React from 'react';
import { Link } from 'react-router-dom';
import {
  LikesWrapper,
  LikesItem,
  Icon,
  Box,
  Title,
  Platform,
  Description,
} from './StreamerBox.style';

const StreamerBox = ({ streamer, handleVote }) => {
  function getDescription(description) {
    let words = description.split(' ');

    if (words.length > 10) {
      return words.slice(0, 10).join(' ') + ' ...';
    } else {
      return description;
    }
  }
  return (
    <Box>
      <Link to={`/streamer/${streamer._id}`}>
        <Title>{streamer.name}</Title>
      </Link>

      <Platform>{streamer.platform}</Platform>
      <Description>{getDescription(streamer.description)}</Description>

      <LikesWrapper>
        <LikesItem onClick={() => handleVote(streamer._id, true)}>
          <Icon src="./images/like.svg" alt="" />
          {streamer.upvotes}
        </LikesItem>

        <LikesItem onClick={() => handleVote(streamer._id, false)}>
          <Icon src="./images/dislike.svg" alt="" />
          {streamer.downvotes}
        </LikesItem>
      </LikesWrapper>
    </Box>
  );
};
export default StreamerBox;
