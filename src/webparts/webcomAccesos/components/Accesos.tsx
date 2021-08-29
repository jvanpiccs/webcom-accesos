import * as React from 'react';
import {
  MotionAnimations,
  Stack,
  Text,
  SearchBox,
  Separator,
} from '@fluentui/react';
import useGetItems from './useGetItems';
import { AccesoDestacado } from './AccesoDestacado';
import { useEffect, useState } from 'react';
import { Acceso } from './Acceso';
export interface IAccesosProps {}

export const Accesos: React.FunctionComponent<IAccesosProps> = (
  props: React.PropsWithChildren<IAccesosProps>
) => {
  let [queryText, setQueryText] = useState<string>(undefined);
  console.log({queryText});

  let { items, isLoading } = useGetItems(true);
  console.log({ items });

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
          <br/>
          <Stack wrap horizontal tokens={{ childrenGap: 5 }}>
            <Stack style={{ width: '100%' }}>
              <Stack style={{ width: 220 }}>
                <SearchBox
                  placeholder='Filtrar'
                  underlined={true}
                  onChange={(_, newValue) => setQueryText(newValue)}
                  onClear={(ev) => setQueryText('')}
                />
              </Stack>
            </Stack>
            <Stack horizontal wrap>
              {items
                .filter(
                  (i) =>
                    i.Categoria == 'Acceso' &&
                    (i.Title?.toLowerCase().includes(queryText?.toLowerCase()) || queryText == undefined)
                )
                .sort((a, b) => a?.Title - b?.Title)
                .map((item) => (
                  <Acceso key={item.ID} item={item} />
                ))}
            </Stack>
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};
