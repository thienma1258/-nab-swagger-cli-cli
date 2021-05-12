import { Polygon } from "./Polygon";
import { Rect } from "./Rect";


export function getPolygonBoundingRect(polygon: Polygon) {

  if (polygon.length <= 0) return undefined;

  let minX = Number.MAX_VALUE;
  let minY = Number.MAX_VALUE;
  let maxX = Number.MIN_VALUE;
  let maxY = Number.MIN_VALUE;

  for (let index = 0; index < polygon.length; index++) {
    const point = polygon[index];

    if (minX > point.x) minX = point.x;
    if (minY > point.y) minY = point.y;
    if (maxX < point.x) maxX = point.x;
    if (maxY < point.y) maxY = point.y;
  }

  const rect: Rect = {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
  };

  return rect;
}
