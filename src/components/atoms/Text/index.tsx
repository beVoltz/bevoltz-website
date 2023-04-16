import React from 'react'

import { TextContainer } from './styles'

import defaultTheme from '@styles/theme'

export interface TextProps {
  content: string
  color: keyof typeof defaultTheme.colors
  size?: keyof typeof defaultTheme.font.sizes
  weight?: keyof typeof defaultTheme.font.weights
  maxWidth?: string
  mobileSize?: keyof typeof defaultTheme.font.sizes
  lineHeight?: number
}

export const Text: React.FC<TextProps> = ({
  content,
  color,
  weight,
  size,
  maxWidth,
  mobileSize,
  lineHeight,
}) => {
  return (
    <TextContainer
      color={color}
      weight={weight}
      content={content}
      size={size}
      maxWidth={maxWidth}
      mobileSize={mobileSize}
      lineHeight={lineHeight}
    >
      {content}
    </TextContainer>
  )
}
