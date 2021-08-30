import * as React from 'react';
import { MotionAnimations, Stack, Text, SearchBox } from '@fluentui/react';
import useGetItems from './useGetItems';
import { AccesoDestacado } from './AccesoDestacado';
import { useState } from 'react';
import { Acceso } from './Acceso';
export interface IAccesosProps {}

export const Accesos: React.FunctionComponent<IAccesosProps> = (
  props: React.PropsWithChildren<IAccesosProps>
) => {
  let [queryText, setQueryText] = useState<string>(undefined);
  let { items, isLoading } = useGetItems(true);

  return (
    <>
      {isLoading === false ? (
        <Stack style={{ animation: MotionAnimations.fadeIn }}>
          <Stack
            wrap
            horizontal
            tokens={{ childrenGap: 13 }}
            style={{ marginBottom: 20 }}
          >
            {items.map((item) =>
              item.Categoria == 'Acceso Destacado' ? (
                <AccesoDestacado item={item} />
              ) : null
            )}
          </Stack>
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
                    (i.Title?.toLowerCase().includes(
                      queryText?.toLowerCase()
                    ) ||
                      queryText == undefined)
                )
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
