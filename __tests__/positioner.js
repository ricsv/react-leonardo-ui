/* global global */

import * as positioner from '../src/positioner';

beforeEach(() => {
  global.document = {
    body: {
      scrollTop: 0,
      scrollLeft: 0,
      scrollWidth: 500,
      scrollHeight: 500
    }
  };
});

afterEach(() => {
  delete global.innerHeight;
  delete global.innerWidth;
  delete global.document;
});

test('Positioner should get the opposite dock', () => {
  expect(positioner.oppositeDock('top')).toBe('bottom');
  expect(positioner.oppositeDock('right')).toBe('left');
  expect(positioner.oppositeDock('bottom')).toBe('top');
  expect(positioner.oppositeDock('left')).toBe('right');
});

test('Positioner should create rects', () => {
  let rect = positioner.createRect(0, 0, 10, 10);
  expect(rect).toEqual({
    left: 0,
    top: 0,
    width: 10,
    height: 10,
    right: 10,
    bottom: 10
  });
  rect = positioner.createRect(-10, -10, 20, 20);
  expect(rect).toEqual({
    left: -10,
    top: -10,
    width: 20,
    height: 20,
    right: 10,
    bottom: 10
  });
  rect = positioner.createRect(5, 5, 2.5, 2.5);
  expect(rect).toEqual({
    left: 5,
    top: 5,
    width: 2.5,
    height: 2.5,
    right: 7.5,
    bottom: 7.5
  });
});

test('Positioner should get the center point of a rect', () => {
  const rect = positioner.createRect(10, 10, 30, 25);
  expect(positioner.getDockCenterPoint(rect, 'top')).toEqual({
    left: 25,
    top: 10
  });
  expect(positioner.getDockCenterPoint(rect, 'right')).toEqual({
    left: 40,
    top: 22.5
  });
  expect(positioner.getDockCenterPoint(rect, 'bottom')).toEqual({
    left: 25,
    top: 35
  });
  expect(positioner.getDockCenterPoint(rect, 'left')).toEqual({
    left: 10,
    top: 22.5
  });
});

test('Positioner should succeed to dock to right and bottom', () => {
  const elemRect = positioner.createRect(0, 0, 100, 100);
  const alignToRect = positioner.createRect(50, 50, 50, 10);
  const windowRect = positioner.createRect(0, 0, 500, 500);

  expect(positioner.tryDock(elemRect, alignToRect, windowRect, 'bottom').fits).toBe(true);
  expect(positioner.tryDock(elemRect, alignToRect, windowRect, 'right').fits).toBe(true);
  expect(positioner.tryDock(elemRect, alignToRect, windowRect, 'left').fits).toBe(false);
  expect(positioner.tryDock(elemRect, alignToRect, windowRect, 'top').fits).toBe(false);
});

it('Positioner should succeed to dock after realigning the element', () => {
  const elemRect = positioner.createRect(0, 0, 200, 200);
  const topLeftRect = positioner.createRect(50, 50, 50, 50);
  const bottomRightRect = positioner.createRect(400, 400, 50, 50);
  const windowRect = positioner.createRect(0, 0, 500, 500);

  expect(positioner.tryDock(elemRect, topLeftRect, windowRect, 'bottom').fits).toBe(true);
  expect(positioner.tryDock(elemRect, topLeftRect, windowRect, 'right').fits).toBe(true);
  expect(positioner.tryDock(elemRect, bottomRightRect, windowRect, 'left').fits).toBe(true);
  expect(positioner.tryDock(elemRect, bottomRightRect, windowRect, 'top').fits).toBe(true);
});

test('Positioner position to an element', () => {
  let element;
  let alignToElement;

  beforeEach(() => {
    element = {
      getBoundingClientRect() {
        return positioner.createRect(0, 0, 200, 200);
      }
    };
    alignToElement = {
      getBoundingClientRect() {
        return positioner.createRect(50, 50, 50, 50);
      }
    };
  });

  test('Positioner should position to the "bottom"', () => {
    const result = positioner.positionToElement(element, alignToElement, 'bottom');
    expect(result).toEqual({
      fits: true,
      dock: 'bottom',
      position: {
        top: 100,
        left: 0
      },
      toPosition: {
        top: 100,
        left: 75
      }
    });
  });

  test('Positioner should position to "right" after failing to "left" and "top"', () => {
    const result = positioner.positionToElement(element, alignToElement, ['left', 'top', 'right']);
    expect(result).toEqual({
      fits: true,
      dock: 'right',
      position: {
        top: 0,
        left: 100
      },
      toPosition: {
        top: 75,
        left: 100
      }
    });
  });

  test('Positioner should position to "bottom" with an offset', () => {
    const result = positioner.positionToElement(element, alignToElement, 'bottom', {
      offset: 5,
      minWindowOffset: 8
    });
    expect(result).toEqual({
      fits: true,
      dock: 'bottom',
      position: {
        top: 105,
        left: 8
      },
      toPosition: {
        top: 100,
        left: 75
      }
    });
  });


  it('Positioner should fail to position to "bottom" because of min edge offset', () => {
    const result = positioner.positionToElement(element, alignToElement, 'bottom', {
      minEdgeOffset: 80
    });
    expect(result).toEqual({
      fits: false,
      dock: 'bottom',
      position: {
        top: 100,
        left: -5
      },
      toPosition: {
        top: 100,
        left: 75
      }
    });
  });
});
