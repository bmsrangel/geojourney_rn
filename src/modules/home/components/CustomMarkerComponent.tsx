import React from 'react';
import styled from 'styled-components/native';

type CustomMarkerComponentProps = {
  name: string;
};

export const CustomMarkerComponent = ({name}: CustomMarkerComponentProps) => {
  return (
    <CustomMarkerWrapper>
      <MarkerText>{name}</MarkerText>
    </CustomMarkerWrapper>
  );
};

const CustomMarkerWrapper = styled.View`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: #ff0000;
  border-radius: 20px;
`;

const MarkerText = styled.Text`
  font-size: 8px;
  font-weight: 500;
  text-align: center;
`;
