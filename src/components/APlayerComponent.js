import {useEffect } from 'react';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';

const APlayerComponent = () => {
  useEffect(() => {
    const ap = new APlayer({
      container: document.getElementById('aplayer'),
      audio: [{
        name: '光るなら',
        artist: 'Goose house',
        url: '/simple-motivation.mp3',
        cover: '/path_to_your_cover_image.jpg'
      }]
    });
  }, []);

  return <div id="aplayer"></div>;
};

export default APlayerComponent;
