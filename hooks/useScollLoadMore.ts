/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import { useCallback, useEffect, useState } from "react";

import {
  useGetImageByNameQuery,
  useLazyGetImageByNameQuery,
} from "redux/service";

const useScollLoadMore = () => {
  const [page, setPage] = useState(1);

  const [keyword, setKeyword] = useState<string>("");

  const [dataPhotos, setDataPhotos] = useState<any>([]);
  const config = {
    name: `${keyword ? keyword : "nature2"}`,
    page: page,
  };
  const { data, error, isLoading } = useGetImageByNameQuery(config);
  const [trigger] = useLazyGetImageByNameQuery();

  useEffect(() => {
    const fetchApi = async () => {
      const result = await trigger({
        name: `${keyword ? keyword : "nature"}`,
        page: 1,
      }).refetch();
      setDataPhotos(result?.data?.photos || []);
    };
    fetchApi();
  }, [trigger, keyword]);
  const loadMore = useCallback(() => {
    setPage(page + 1);
    setDataPhotos(dataPhotos.concat(...(data?.photos || [])));
  }, [page, dataPhotos, setDataPhotos, setPage]);

  const handleHome = useCallback(async () => {
    setDataPhotos([]);
    setKeyword("");
    setPage(1);
    const result = await trigger({
      name: "nature",
      page: 1,
    }).refetch();
    if (result?.data) {
      setDataPhotos(result?.data?.photos || []);
    }
  }, [setDataPhotos, setKeyword, setPage]);

  const handleSearch = useCallback(
    async (keyword: string) => {
      setDataPhotos([]);
      setPage(1);
      setKeyword(keyword || "");
      const result = await trigger({
        name: keyword,
        page: 1,
      }).refetch();
      if (result?.data) {
        setDataPhotos(result?.data?.photos || []);
      }
    },
    [keyword, setKeyword, setPage]
  );
  useEffect(() => {
    function handleScrollEvent() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMore();
        // here add more items in the 'filteredData' state from the 'allData' state source.
      }
    }
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [loadMore]);

  return {
    data,
    dataPhotos,
    handleHome,
    loadMore,
    isLoading,
    error,
    handleSearch,
  };
};
export default useScollLoadMore;
