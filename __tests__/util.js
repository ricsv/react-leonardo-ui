import {
  camelToKebabCase,
  luiClassName,
  filterProps
} from '../src/util';

describe('util camelToKebabCase function', () => {
  test('to convert correctly', () => {
    expect(camelToKebabCase('abcDefGH')).toBe('abc-def-g-h');
  });
});

describe('util luiClass function', () => {
  const name = 'button';
  const modifiers = ['size', 'block'];
  const states = ['active', 'focused', 'hovered', 'disabled'];

  test('to return a base class', () => {
    expect(luiClassName(name, {
      modifiers,
      states
    })).toBe('lui-button');
  });

  test('to return correct className using modifiers', () => {
    expect(luiClassName(name, {
      props: {
        size: 'large',
        block: true,
        abc: false,
        xyz: null
      },
      modifiers,
      states
    })).toBe('lui-button lui-button--large lui-button--block');
  });

  test('to return correct className using states', () => {
    expect(luiClassName(name, {
      props: {
        active: true,
        focused: false,
        hovered: true
      },
      modifiers,
      states
    })).toBe('lui-button lui-active lui-hovered');
  });

  test('to return correct className using additional classes', () => {
    expect(luiClassName(name, {
      props: {
        className: 'extra classes'
      },
      modifiers,
      states
    })).toBe('lui-button extra classes');
  });

  test('to return correct className using a combination', () => {
    expect(luiClassName(name, {
      props: {
        active: true,
        focused: false,
        hovered: true,
        size: 'large',
        block: true
      },
      modifiers,
      states
    })).toBe('lui-button lui-button--large lui-button--block lui-active lui-hovered');
  });
});

describe('util filterProps function', () => {
  test('to pass all props', () => {
    expect(filterProps({
      a: 'a',
      b: 'b'
    }, ['x'], 'y')).toEqual({
      a: 'a',
      b: 'b'
    });
  });

  test('to exclude correct props', () => {
    expect(filterProps({
      a: 'a',
      b: 'b',
      c: 'c'
    }, ['a', 'x'], 'c', 'x')).toEqual({
      b: 'b'
    });
  });

  test('to exclude all props', () => {
    expect(filterProps({
      a: 'a',
      b: 'b'
    }, ['a'], 'b')).toEqual({});
  });

  test('to exclude regex props', () => {
    expect(filterProps({
      a: 'a',
      onClick: 'onClick'
    }, /^on[A-Z]/)).toEqual({ a: 'a' });
  });
});

