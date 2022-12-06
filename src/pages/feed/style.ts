import styled from "styled-components";
import { IColumn } from "./types";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Title = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
  margin-bottom: 24px;
`

export const TitleHighligt = styled.span`
  position: relative;
  top: -10px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF70;
`

export const Column = styled.p<IColumn>`
  display: ${({flex}) => flex};
  padding-right: 24px;
`