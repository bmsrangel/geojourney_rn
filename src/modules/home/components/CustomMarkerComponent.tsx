import React from 'react';
import styled from 'styled-components/native';
import {primaryColor} from '../../../shared/constants/colors';

type CustomMarkerComponentProps = {
  name: string;
};

export const CustomMarkerComponent = ({name}: CustomMarkerComponentProps) => {
  return (
    <CustomMarkerWrapper
      style={{
        backgroundColor: primaryColor,
      }}>
      <MarkerText>{name}</MarkerText>
    </CustomMarkerWrapper>
  );
};

const CustomMarkerWrapper = styled.View`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const MarkerText = styled.Text`
  font-size: 8px;
  font-weight: 500;
  text-align: center;
  color: #fff;
`;
