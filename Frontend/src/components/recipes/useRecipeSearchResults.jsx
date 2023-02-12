import { useState, useEffect } from "react";

export const useRecipeSearchResults = (searchString) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const loadSearchResults = async () => {
      const response = fetch(
        `http://localhost:8080/recipes?search=${searchString}`
      );
      const results = await (await response).json();
      setSearchResults(results);
      setIsLoading(false);
    };
    loadSearchResults();
  }, [searchString]);

  return { isLoading, searchResults };
};
