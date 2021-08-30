import { ActionButton, MotionAnimations } from '@fluentui/react';
import * as React from 'react';

export interface IAccesoProps {
    item:any;
}

export const Acceso: React.FunctionComponent<IAccesoProps> = (props: React.PropsWithChildren<IAccesoProps>) => {
  let item = props.item;
  
    return (
    <>
        <ActionButton 
            style={{ width:270, textAlign:'left', animation:MotionAnimations.fadeIn}}
            iconProps={{iconName:item?.Icono}}
            text={item.Title}
            ariaLabel={item.Title}
            href={item.Link}
        />
    </>
  );
};