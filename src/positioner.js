const oppositeDockMap = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
};

export function oppositeDock(dock) {
  return oppositeDockMap[dock];
}

export function getDocks(dock) {
  let order = [dock];
  if (dock === 'top') {
    order = order.concat(['bottom', 'right', 'left']);
  } else if (dock === 'right') {
    order = order.concat(['bottom', 'left', 'top']);
  } else if (dock === 'left') {
    order = order.concat(['bottom', 'right', 'top']);
  } else {
    order = order.concat(['top', 'right', 'left']);
  }
  return order;
}

export function addOffset(dock, left = 0, top = 0, offset = 0) {
  if (dock === 'top') {
    return {
      top: top - offset,
      left,
    };
  } if (dock === 'right') {
    return {
      top,
      left: left + offset,
    };
  } if (dock === 'left') {
    return {
      top,
      left: left - offset,
    };
  }
  return {
    top: top + offset,
    left,
  };
}

export function createRect(top = 0, left = 0, width = 0, height = 0) {
  return {
    top,
    right: left + width,
    bottom: top + height,
    left,
    width,
    height,
  };
}

export function getDockCenterPoint(rect, dock) {
  let top;
  let left;
  if (dock === 'top') {
    top = rect.top; // eslint-disable-line prefer-destructuring
    left = rect.left + rect.width / 2;
  } else if (dock === 'right') {
    top = rect.top + rect.height / 2;
    left = rect.right;
  } else if (dock === 'left') {
    top = rect.top + rect.height / 2;
    left = rect.left; // eslint-disable-line prefer-destructuring
  } else {
    top = rect.bottom;
    left = rect.left + rect.width / 2;
  }
  return {
    top,
    left,
  };
}

export function tryPosition(rect, withinRect) {
  const left = rect.left >= withinRect.left;
  const right = rect.right <= withinRect.right;
  const top = rect.top >= withinRect.top;
  const bottom = rect.bottom <= withinRect.bottom;

  return {
    left,
    right,
    top,
    bottom,
  };
}

export function createTryRect(elemRect, toPosition, dock, offset) {
  let top;
  let left;
  if (dock === 'top') {
    top = toPosition.top - elemRect.height - offset;
    left = toPosition.left - elemRect.width / 2;
  } else if (dock === 'right') {
    top = toPosition.top - elemRect.height / 2;
    left = toPosition.left + offset;
  } else if (dock === 'left') {
    top = toPosition.top - elemRect.height / 2;
    left = toPosition.left - elemRect.width - offset;
  } else {
    top = toPosition.top + offset;
    left = toPosition.left - elemRect.width / 2;
  }

  return createRect(top, left, elemRect.width, elemRect.height);
}

export function tryDock(elemRect, alignToRect, windowRect, dock, options = {}) {
  const {
    offset = 0,
    minWindowOffset = 0,
    minEdgeOffset = 0,
  } = options;

  const windowOffsetRect = createRect(
    windowRect.top + minWindowOffset,
    windowRect.left + minWindowOffset,
    windowRect.width - minWindowOffset * 2,
    windowRect.height - minWindowOffset * 2
  );

  const toPosition = getDockCenterPoint(alignToRect, dock);
  const tryRect = createTryRect(elemRect, toPosition, dock, offset);
  let fitResult = tryPosition(tryRect, windowOffsetRect);
  if (dock === 'top' || dock === 'bottom') {
    if (!fitResult.left) {
      tryRect.left = Math.min(windowOffsetRect.left, toPosition.left - minEdgeOffset);
      tryRect.right = tryRect.left + tryRect.width;
      fitResult = tryPosition(tryRect, windowOffsetRect);
    }
    if (!fitResult.right) {
      tryRect.right = Math.max(windowOffsetRect.right, toPosition.left + minEdgeOffset);
      tryRect.left = tryRect.right - tryRect.width;
      fitResult = tryPosition(tryRect, windowOffsetRect);
    }
  } else {
    if (!fitResult.top) {
      tryRect.top = Math.min(windowOffsetRect.top, toPosition.top - minEdgeOffset);
      tryRect.bottom = tryRect.top + tryRect.height;
      fitResult = tryPosition(tryRect, windowOffsetRect);
    }
    if (!fitResult.bottom) {
      tryRect.bottom = Math.max(windowOffsetRect.bottom, toPosition.top + minWindowOffset);
      tryRect.top = tryRect.bottom - tryRect.height;
      fitResult = tryPosition(tryRect, windowOffsetRect);
    }
  }

  return {
    fits: fitResult.top && fitResult.right && fitResult.bottom && fitResult.left,
    dock,
    position: {
      left: tryRect.left,
      top: tryRect.top,
    },
    toPosition: getDockCenterPoint(alignToRect, dock),
  };
}

export function positionToRect(element, rect, dock = 'bottom', options = {}) {
  const elemRect = element.getBoundingClientRect();
  const { pageXOffset, pageYOffset } = window;
  const windowRect = createRect(
    0,
    0,
    document.body.clientWidth,
    document.body.clientHeight
  );

  const getOffset = (fromElement) => {
    const parent = fromElement.offsetParent;
    if (parent) {
      const parentOffset = getOffset(parent);
      return {
        top: parent.offsetTop + parentOffset.top,
        left: parent.offsetLeft + parentOffset.left,
      };
    }
    return {
      top: 0,
      left: 0,
    };
  };

  const docks = getDocks(dock);
  let firstResult = null;
  for (let i = 0; i < docks.length; i += 1) {
    const result = tryDock(elemRect, rect, windowRect, docks[i], options);
    result.position.top += pageYOffset;
    result.toPosition.top += pageYOffset;
    result.position.left += pageXOffset;
    result.toPosition.left += pageXOffset;

    if (options.containerElement) {
      const offset = getOffset(options.containerElement);
      result.position.left -= offset.left;
      result.position.top -= offset.top;
      result.toPosition.left -= offset.left;
      result.toPosition.top -= offset.top;
    }

    if (result.fits) {
      return result;
    }
    if (i === 0) {
      firstResult = result;
    }
  }
  // If no fit is found - return the first position
  return firstResult;
}

export function positionToElement(element, alignToElement, dock = 'bottom', options = {}) {
  const rect = alignToElement.getBoundingClientRect();
  return positionToRect(element, rect, dock, options);
}

export function positionToCoordinate(element, x, y, dock = 'bottom', options = {}) {
  const rect = {
    top: y,
    bottom: y,
    left: x,
    right: x,
    width: 0,
    height: 0,
  };
  return positionToRect(element, rect, dock, options);
}
