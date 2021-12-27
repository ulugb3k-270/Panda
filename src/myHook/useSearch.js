import { useState, useEffect } from "react";

import API_KEY from "../key";

const SECOND_API_KEY = "AIzaSyBNw0VD6G0h_iSw_tDlqEFT8YB_ZuMgyPg"

const CONTEXT_KEY = "e9457be8c1c8af023";

const useSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${SECOND_API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => setData(result));
    };

    fetchData();
  },[term]);

  return {data}
};

export default useSearch
