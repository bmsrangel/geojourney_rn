import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {primaryColor} from '../constants/colors';

type FilledButtonWrapperProps = {
  backgroundColor: string;
};

type FilledButtonLabelProps = {
  color?: string;
};

export type FilledButtonComponentProps = {
  label: string;
  onPressed?: () => void;
};

export const FilledButtonComponent = ({
  label,
  onPressed,
}: FilledButtonComponentProps) => {
  return (
    <TouchableOpacity onPress={onPressed}>
      <FilledButtonWrapper backgroundColor={primaryColor}>
        <FilledButtonLabel color={'#fff'}>{label}</FilledButtonLabel>
      </FilledButtonWrapper>
    </TouchableOpacity>
  );
};

const FilledButtonWrapper = styled.View<FilledButtonWrapperProps>`
  width: 40%;
  height: 40px;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const FilledButtonLabel = styled.Text<FilledButtonLabelProps>`
  color: ${props => props.color ?? '#000'};
`;
