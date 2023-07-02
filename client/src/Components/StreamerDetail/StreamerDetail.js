import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Page,
  Wrapper,
  Title,
  Platform,
  Description,
  Image,
} from './StreamerDetail.style';

function StreamerDetail() {
  const [streamer, setStreamer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/streamers/${id}`).then((response) => {
      setStreamer(response.data);
    });
  }, [id]);
  if (!streamer) {
    return null;
  }

  return (
    <Page>
      <Wrapper>
        <Title>{streamer.name}</Title>

        <Platform>{streamer.platform}</Platform>
        <Image
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
          alt=""
        />

        <Description>{streamer.description}</Description>
      </Wrapper>
    </Page>
  );
}

export default StreamerDetail;
