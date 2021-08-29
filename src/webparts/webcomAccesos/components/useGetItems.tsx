import { useState, useEffect } from 'react';
import { sp } from '@pnp/sp';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';
import {itemsArray } from './data';

export default function useGetItems(initLoading:boolean) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(initLoading);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      let newItems: any[] = await sp.web.lists
        .getById('59349312-ada9-482f-850c-dbb2c5b0ac4c')
        .items.get();
      // let newItems = itemsArray;
      setItems(newItems);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  // console.log({items});
  return {
    items, isLoading
  };
}
