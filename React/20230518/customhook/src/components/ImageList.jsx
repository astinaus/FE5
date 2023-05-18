import React from 'react';
import ImageItem from './ImageItme';

export default function ImageList({ imageList }) {
  return (
    <ul>
      {imageList.map((item) => {
        return (
          <li key={item.id}>
            <ImageItem img={item} />
          </li>
        );
      })}
    </ul>
  );
}
