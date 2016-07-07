
export function camelToKebabCase(value) {
  return value.replace(/([A-Z])/g, '-$1').toLowerCase();
}

export function luiClassName(name, opts) {
  const {
    props = {},
    modifiers = [],
    states = []
  } = opts;

  const baseClass = `lui-${name}`;
  let className = baseClass;

  const isModifier = key => modifiers.some(modifier => modifier === key);
  const isState = key => states.some(state => state === key);

  const keys = Object.keys(props);
  keys.forEach((key) => {
    if (isModifier(key)) {
      // Modifiers can be booleans or key-value pair of strings
      if (typeof props[key] === 'boolean') {
        if (props[key]) {
          className += ` ${baseClass}--${key}`;
        }
      } else if (props[key]) {
        className += ` ${baseClass}--${props[key]}`;
      }
    }
  });
  keys.forEach((key) => {
    if (isState(key) && props[key]) {
      // States are always booleans
      className += ` lui-${key}`;
    }
  });
  if (props.className) {
    className += ` ${props.className}`;
  }

  return className;
}

export function filterProps(props = {}, ...filter) {
  const defaultFilter = ['children', 'ref', 'key', 'className'];

  const shouldFilter = (prop) => {
    let res = false;

    const shouldFilterKey = (key) => {
      if (Array.isArray(key)) {
        return key.some(shouldFilterKey);
      } else if (key instanceof RegExp) {
        return key.test(prop);
      }
      return key === prop;
    };

    const filterKeys = filter.concat(defaultFilter);
    for (let i = 0; i < filterKeys.length; i++) {
      res = res || shouldFilterKey(filterKeys[i]);
    }

    return res;
  };

  const newProps = {};
  Object.keys(props).forEach((key) => {
    if (!shouldFilter(key)) {
      newProps[key] = props[key];
    }
  });

  return newProps;
}
