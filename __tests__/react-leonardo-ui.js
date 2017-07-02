import * as reactLui from '../src/react-leonardo-ui';

test('Top-level API returns a set of functions', () => {
  expect(typeof reactLui.Button).toBe('function');
  expect(typeof reactLui.ButtonGroup).toBe('function');
  expect(typeof reactLui.Checkbox).toBe('function');
  expect(typeof reactLui.Dialog).toBe('function');
  expect(typeof reactLui.FadeButton).toBe('function');
  expect(typeof reactLui.Icon).toBe('function');
  expect(typeof reactLui.Input).toBe('function');
  expect(typeof reactLui.InputGroup).toBe('function');
  expect(typeof reactLui.List).toBe('function');
  expect(typeof reactLui.RadioButton).toBe('function');
  expect(typeof reactLui.Search).toBe('function');
  expect(typeof reactLui.Select).toBe('function');
  expect(typeof reactLui.Switch).toBe('function');
  expect(typeof reactLui.Tab).toBe('function');
  expect(typeof reactLui.Textarea).toBe('function');
});

