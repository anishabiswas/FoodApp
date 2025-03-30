import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";

const useResMenuData = (id) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + id);
    const response = await data.json();
    setMenuData(response.data);
  };

  return menuData;
};

export default useResMenuData;
