import { useState, useEffect } from "react";

export const useShoppingList = () => {
  const [isLoading, setIsLoading] = useState();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadShoppingList = async () => {
      const response = await fetch("http://localhost:8080/shopping-list");
      const items = await response.json();
      setItems(items);
      setIsLoading(false);
    };
    loadShoppingList();
  }, []);

  return { isLoading, items };
};
