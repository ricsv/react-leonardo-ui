import {
  camelToKebabCase,
  luiClassName
} from '../src/util';

describe('util camelToKebabCase function', () => {
  test('to convert correctly', () => {
    expect(camelToKebabCase('abcDefGH')).toBe('abc-def-g-h');
  });
});

describe('util luiClass function', () => {
  const name = 'button';

  test('to return a base class', () => {
    expect(luiClassName(name)).toBe('lui-button');
  });

  test('to return a base class from empty modifiers and state', () => {
    expect(luiClassName(name, {
      modifiers: {},
      states: {},
    })).toBe('lui-button');
  });

  test('to return correct className using modifiers', () => {
    expect(luiClassName(name, {
      modifiers: {
        size: 'large',
        block: true,
      }
    })).toBe('lui-button lui-button--large lui-button--block');
  });

  test('to return correct className using states', () => {
    expect(luiClassName(name, {
      states: {
        active: true,
        focused: false,
        hovered: true,
      }
    })).toBe('lui-button lui-active lui-hovered');
  });

  test('to return correct className using additional classes', () => {
    expect(luiClassName(name, {
      className: 'extra classes',
    })).toBe('lui-button extra classes');
  });

  test('to return correct className using a combination', () => {
    expect(luiClassName(name, {
      modifiers: {
        size: 'large',
        block: true,
      },
      states: {
        active: true,
        focused: false,
        hovered: true,
      }
    })).toBe('lui-button lui-button--large lui-button--block lui-active lui-hovered');
  });
});

