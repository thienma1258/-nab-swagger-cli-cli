import { Point } from "./Point";
import { Rect } from "./Rect";
import { Size } from "./Size";


export const RectZero: Rect = {
  x: 0.0,
  y: 0.0,
  width: 0.0,
  height: 0.0,
};


export function createRect({
  center,
  size,
}: {
  center: Point,
  size: Size,
}): Rect {
  return {
    x: center.x - size.width / 2.0,
    y: center.y - size.height / 2.0,
    width: size.width,
    height: size.height,
  };
}


export function getRectArea(rect: Rect) {
  return rect.width * rect.height;
}


export function getRectMaxX(rect: Rect) {
  return rect.x + rect.width;
}


export function getRectMaxY(rect: Rect) {
  return rect.y + rect.height;
}


export function getRectIntersection(rectA: Rect, rectB: Rect): Rect | undefined {

  const rectBMaxX = getRectMaxX(rectB);
  if (rectA.x >= rectBMaxX) {
    return undefined;
  }

  const rectAMaxX = getRectMaxX(rectA);
  if (rectB.x >= rectAMaxX) {
    return undefined;
  }

  const rectBMaxY = getRectMaxY(rectB);
  if (rectA.y >= rectBMaxY) {
    return undefined;
  }

  const rectAMaxY = getRectMaxY(rectA);
  if (rectB.y >= rectAMaxY) {
    return undefined;
  }

  const x = Math.max(rectA.x, rectB.x);
  const y = Math.max(rectA.y, rectB.y);

  return {
    x: x,
    y: y,
    width: Math.min(rectAMaxX, rectBMaxX) - x,
    height: Math.min(rectAMaxY, rectBMaxY) - y,
  };
}


export function areRectsIntersecting(rectA: Rect, rectB: Rect): boolean {

  const intersection = getRectIntersection(rectA, rectB);

  if (typeof intersection === "undefined") return false;

  if (intersection.width <= 0.0 || intersection.height <= 0.0) return false;

  return true;
}


export function getRectUnion(rectA: Rect, rectB: Rect): Rect {

  const minX = Math.min(rectA.x, rectB.x);
  const minY = Math.min(rectA.y, rectB.y);

  const maxX = Math.max(getRectMaxX(rectA), getRectMaxX(rectB));
  const maxY = Math.max(getRectMaxY(rectA), getRectMaxY(rectB));

  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
  };
}
