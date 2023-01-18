import React from 'react';
import {Box, Input, Row, Text} from 'native-base';
import {ColorType} from 'native-base/lib/typescript/components/types';

type CustomInputComponentProps = {
  placeholder?: string | undefined;
  value?: string | undefined;
  onChangeText?: (value: string) => void | undefined;
  maxLength?: number | undefined;
  numberOfLines?: number | undefined;
  editable?: boolean | undefined;
  color?: ColorType;
  errorMessage?: string | undefined;
};

export const CustomInputComponent = ({
  placeholder,
  value,
  onChangeText,
  maxLength,
  numberOfLines,
  editable,
  color,
  errorMessage,
}: CustomInputComponentProps) => (
  <Box>
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      maxLength={maxLength}
      numberOfLines={numberOfLines}
      placeholderTextColor="#9a9a9a"
      variant="underlined"
      borderColor={errorMessage !== undefined ? 'red.600' : 'gray.500'}
      focusOutlineColor={errorMessage !== undefined ? 'red.600' : 'gray.500'}
      color={color}
      editable={editable}
    />
    <Row justifyContent="space-between" alignItems="flex-end">
      {errorMessage !== undefined ? (
        <Text color="red.600" fontSize="12px">
          {errorMessage}
        </Text>
      ) : (
        <Box />
      )}
      {maxLength !== undefined && value !== undefined ? (
        <Text color="#9a9a9a">
          {value.length}/{maxLength}
        </Text>
      ) : null}
    </Row>
  </Box>
);
