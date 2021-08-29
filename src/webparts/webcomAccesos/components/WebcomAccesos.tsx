import * as React from 'react';
import { IWebcomAccesosProps } from './IWebcomAccesosProps';
import { Accesos } from './Accesos';

export default class WebcomAccesos extends React.Component<IWebcomAccesosProps, {}> {
  public render(): React.ReactElement<IWebcomAccesosProps> {

    return (
        <Accesos />
    );
  }
}