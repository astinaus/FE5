import React, { useState, useEffect } from 'react';
import ImageList from './components/ImageList';
import useScrollBottom from './hooks/useScrollBottom';
import Loading from './components/Loading';

export default function App2() {
  const [images, setImages] = useState([]);
  const [fetchpage, setFetchpage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const isBottom = useScrollBottom();
  useEffect(() => {
    if (isBottom) {
      setFetchpage((prev) => prev + 1);
    }
  }, [isBottom]);

  useEffect(() => {
    fetchImage();
  }, [fetchpage]);

  const fetchImage = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${fetchpage}&limit=5`
      );
      if (!response.ok) {
        throw new Error('데이터를 불러오는데 실패했습니다.');
      }
      const data = await response.json();
      setImages((prev) => [...prev, ...data]);
      setIsLoading(false);
    } catch (err) {
      console.error('네트워크 응답에 문제가 있습니다.', err);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ImageList imageList={images} />
      {isLoading && <Loading />}
    </div>
  );
}
