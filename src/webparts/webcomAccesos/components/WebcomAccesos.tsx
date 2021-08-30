import * as React from 'react';
import { Customizer } from 'office-ui-fabric-react';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { Accesos } from './Accesos';
export interface IWebcomAccesosProps {
  themeVariant: IReadonlyTheme | undefined;
}

export const WebcomAccesos: React.FunctionComponent<IWebcomAccesosProps> = (
  props: React.PropsWithChildren<IWebcomAccesosProps>
) => {
  return (
    <>
      <Customizer settings={{ theme: props.themeVariant }}>
        <Accesos />
      </Customizer>
    </>
  );
};
