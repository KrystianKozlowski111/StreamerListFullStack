import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import StreamerForm from '../StreamerForm/StreamerForm';
import StreamerBox from '../StreamerBox/StreamerBox';
import { Page, Wrapper, Grid } from './StreamerList.style';
const StreamerList = () => {
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:3001', { autoConnect: true });

    socket.on('streamerUpdate', (data) => {
      if (data.message === 'New streamer added!') {
        setStreamers((prevStreamers) => {
          const newStreamers = [...prevStreamers, ...data.updatedStreamers];
          return newStreamers.sort((a, b) => b.upvotes - a.upvotes);
        });
      } else {
        setStreamers((prevStreamers) => {
          const updatedStreamers = prevStreamers.map(
            (streamer) =>
              data.updatedStreamers.find((u) => u._id === streamer._id) ||
              streamer
          );
          return updatedStreamers.sort((a, b) => b.upvotes - a.upvotes);
        });
      }
    });

    axios.get('http://localhost:3001/streamers').then((response) => {
      const sortedStreamers = response.data.sort(
        (a, b) => b.upvotes - a.upvotes
      );
      setStreamers(sortedStreamers);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleVote = (id, upvote = true) => {
    const voteType = upvote ? 'upvote' : 'downvote';
    const oppositeVoteType = upvote ? 'downvote' : 'upvote';
    if (sessionStorage.getItem(`voted_${id}`) === voteType) {
      alert(`You have already voted ${voteType} for this streamer.`);
      return;
    }
    if (sessionStorage.getItem(`voted_${id}`) === oppositeVoteType) {
      axios
        .put(`http://localhost:3001/streamers/${id}/vote`, {
          upvote: upvote,
          changeVote: true,
        })
        .then(() => {
          sessionStorage.setItem(`voted_${id}`, voteType);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .put(`http://localhost:3001/streamers/${id}/vote`, { upvote: upvote })
        .then(() => {
          sessionStorage.setItem(`voted_${id}`, voteType);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Page>
      <Wrapper>
        <StreamerForm />
        <Grid>
          {streamers.map((streamer) => (
            <StreamerBox
              streamer={streamer}
              handleVote={handleVote}
              key={streamer._id}
            />
          ))}
        </Grid>
      </Wrapper>
    </Page>
  );
};

export default StreamerList;
