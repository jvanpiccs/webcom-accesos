import * as React from 'react';
import { Customizer } from 'office-ui-fabric-react';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { Accesos } from './Accesos';

// export interface IWebcomAccesosProps {
//   themeVariant: IReadonlyTheme | undefined;
//   context: any;
// }
// export default class WebcomAccesos extends React.Component<
//   IWebcomAccesosProps,
//   {}
// > {
//   public render(): React.ReactElement<IWebcomAccesosProps> {
//     return (
//       <Customizer settings={{ theme: this.props.themeVariant }}>
//         <Accesos />
//       </Customizer>
//     );
//   }
// }

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
