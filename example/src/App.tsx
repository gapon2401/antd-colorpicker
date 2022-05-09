import React from 'react'
import { Button, Col, Form, Row, Select } from 'antd'
import {
  Colorpicker,
  ColorPickerTypes,
  ColorPickerValue,
} from 'antd-colorpicker'

import 'antd/dist/antd.css'

type InitialValues = {
  picker_type: ColorPickerTypes
  popup_color: ColorPickerValue
  [key: string]: ColorPickerValue
}

const App = () => {
  const handleOnFinish = (values: any) => {
    console.log(values)
  }

  const initialValues: InitialValues = {
    picker_type: 'SketchPicker',
    popup_color: { r: 26, g: 14, b: 85, a: 1 },
  }

  const pickerTypes: ColorPickerTypes[] = [
    'BlockPicker',
    'ChromePicker',
    'CirclePicker',
    'CompactPicker',
    'GithubPicker',
    'GooglePicker',
    'HuePicker',
    'MaterialPicker',
    'PhotoshopPicker',
    'SketchPicker',
    'SliderPicker',
    'SwatchesPicker',
    'TwitterPicker',
  ]

  pickerTypes.forEach((type) => {
    initialValues[`color_${type}`] = { r: 26, g: 14, b: 85, a: 1 }
  })

  return (
    <div
      style={{ maxWidth: '500px', margin: '20px auto', paddingBottom: '50px' }}
    >
      <Form
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 13 }}
        labelAlign='left'
        onFinish={handleOnFinish}
        initialValues={initialValues}
      >
        <Form.Item label={`Popup picker type`} name='picker_type'>
          <Select>
            {pickerTypes.map((pickerType) => (
              <Select.Option key={pickerType} value={pickerType}>
                {pickerType}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.picker_type !== currentValues.picker_type
          }
        >
          {({ getFieldValue }) => (
            <>
              <Form.Item label={`Popup colorpicker`} name='popup_color'>
                <Colorpicker popup picker={getFieldValue('picker_type')} />
              </Form.Item>
            </>
          )}
        </Form.Item>
        <hr />
        {pickerTypes.map((pickerType) => (
          <Form.Item
            label={pickerType}
            key={`pickerType${pickerType}`}
            name={`color_${pickerType}`}
          >
            <Colorpicker picker={pickerType} />
          </Form.Item>
        ))}
        <Form.Item wrapperCol={{ span: 20 }}>
          <Row>
            <Col span={13}>
              <Button type='primary' htmlType='submit'>
                Show values in console
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  )
}

export default App
