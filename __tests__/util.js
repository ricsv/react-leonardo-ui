import {
  camelToKebabCase,
  luiClassName,
  filterProps
} from '../src/util';

describe('util camelToKebabCase function', () => {
  it('to convert correctly', () => {
    expect(camelToKebabCase('abcDefGH')).toBe('abc-def-g-h');
  });
});

describe('util luiClass function', () => {
  const name = 'button';
  const modifiers = ['size', 'block'];
  const states = ['active', 'focused', 'hovered', 'disabled'];

  it('to return a base class', () => {
    expect(luiClassName(name, {
      modifiers,
      states
    })).toBe('lui-button');
  });

  it('to return correct className using modifiers', () => {
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

  it('to return correct className using states', () => {
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

  it('to return correct className using additional classes', () => {
    expect(luiClassName(name, {
      props: {
        className: 'extra classes'
      },
      modifiers,
      states
    })).toBe('lui-button extra classes');
  });

  it('to return correct className using a combination', () => {
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
  it('to pass all props', () => {
    expect(filterProps({
      a: 'a',
      b: 'b'
    }, ['x'], 'y')).toEqual({
      a: 'a',
      b: 'b'
    });
  });

  it('to exclude correct props', () => {
    expect(filterProps({
      a: 'a',
      b: 'b',
      c: 'c'
    }, ['a', 'x'], 'c', 'x')).toEqual({
      b: 'b'
    });
  });

  it('to exclude all props', () => {
    expect(filterProps({
      a: 'a',
      b: 'b'
    }, ['a'], 'b')).toEqual({});
  });

  it('to exclude regex props', () => {
    expect(filterProps({
      a: 'a',
      onClick: 'onClick'
    }, /^on[A-Z]/)).toEqual({ a: 'a' });
  });
});

