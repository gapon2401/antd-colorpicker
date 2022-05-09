import { Component, CSSProperties } from 'react'
import { ColorPickerProps } from 'react-color'

import { Classes } from 'reactcss'

export interface GooglePickerStylesProps {
  picker: CSSProperties
  head: CSSProperties
  saturation: CSSProperties
  swatch: CSSProperties
  body: CSSProperties
  controls: CSSProperties
  color: CSSProperties
  hue: CSSProperties
  Hue: CSSProperties
}

interface GooglePickerProps extends ColorPickerProps<GooglePicker> {
  width?: number | string | undefined
  styles?: Partial<Classes<GooglePickerStylesProps>> | undefined
  header?: string
  hex?: string
  rgb?: string
  hsl?: string
  hsv?: string
}

class GooglePicker extends Component<GooglePickerProps> {}

declare module 'react-color' {
  export { default as GooglePicker, GooglePickerProps }
}
