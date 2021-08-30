import { Depths, IStackStyles, Stack, Text } from '@fluentui/react';
import * as React from 'react';

const stackStyles: IStackStyles = {
  root: [
    {
      boxShadow: Depths.depth4,
      border: '1px solid #e5e5e5',
      height: 200,
      maxWidth: 230,
      minWidth: 190,
      width: '100%',
      backgroundColor: "white",
      selectors: {
        ':hover': {
          boxShadow: Depths.depth8,
          cursor: 'pointer',
        },
      },
    },
  ],
};

export interface IAccesoDestacadoProps {
  item: any;
}

export const AccesoDestacado: React.FunctionComponent<IAccesoDestacadoProps> = (
  props: React.PropsWithChildren<IAccesoDestacadoProps>
) => {
  let item = props.item;
  return (
    <>
      <Stack
        styles={stackStyles}
        onClick={() => (window.location.href = item.Link)}
      >
        <Stack style={{ height: 130, borderBottom:'1px solid #e5e5e5' }}>
          <img style={{ width: '100%', height: '100%' }} src={item?.Icono} />
        </Stack>
        <Stack>
          <Text style={{ margin: '14px 12px' }}>{item.Title}</Text>
        </Stack>
      </Stack>
    </>
  );
};