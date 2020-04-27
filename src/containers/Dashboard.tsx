import * as React from 'react';
import { Header } from '../components/Header';
import { Sidemenu } from '../components/Sidemenu';
import { Body } from '../components/Body';
import { Content } from '../components/Content';
import { Wrapper } from '../components/Wrapper';
import { Routes } from './Routes';

export class Dashboard extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>TS.R.EX - Dashboard</Header>
        <Body>
          <Sidemenu />
          <Content>
            <Routes />
          </Content>
        </Body>
      </Wrapper>
    );
  }
}
