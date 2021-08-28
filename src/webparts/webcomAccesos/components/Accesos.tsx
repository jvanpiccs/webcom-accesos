import * as React from 'react';
import { MotionAnimations, Stack, Text, SearchBox, Separator } from '@fluentui/react';
import useGetItems from './useGetItems';
import { AccesoDestacado } from './AccesoDestacado';
import { useEffect, useState } from 'react';
import { Acceso } from './Acceso';
export interface IAccesosProps {}

export const Accesos: React.FunctionComponent<IAccesosProps> = (
  props: React.PropsWithChildren<IAccesosProps>
) => {
  let { items, isLoading } = useGetItems(true);
  let [accesos, setAccesos] = useState(items);
  let [queryText, setQueryText] = useState<string>('');
  console.log({ queryText }, { accesos });

  useEffect(() => {
    let results;
    if (queryText === '') {
      results = items;
    } else {
      results = items.filter((i) =>
        i.Title.toLowerCase().includes(queryText?.toLowerCase())
      );
    }
    setAccesos(results);
  }, [queryText]);

  return (
    <>
      {isLoading === false ? (
        <Stack style={{ animation: MotionAnimations.fadeIn }}>
          <Text variant='large'>Accesos</Text>
          <br />
          <Stack wrap horizontal tokens={{ childrenGap: 13 }}>
            {items.map((item) =>
              item.Categoria == 'Acceso Destacado' ? (
                <AccesoDestacado item={item} />
              ) : null
            )}
          </Stack>
          <Separator/>
          <Stack wrap horizontal tokens={{ childrenGap: 5 }}>
            <Stack style={{ width: '100%' }}>
              <Stack style={{ width: 220 }}>
                <SearchBox
                  placeholder='Buscar accesos'
                  underlined={true}
                  onChange={(_, newValue) => setQueryText(newValue)}
                  onClear={() => setQueryText('')}
                />
              </Stack>
            </Stack>
            {accesos.map((item) =>
              item.Categoria == 'Acceso' ? (
                <Acceso key={item.ID} item={item} />
              ) : null
            )}
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};
