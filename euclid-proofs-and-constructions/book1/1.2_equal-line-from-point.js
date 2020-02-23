/* ================================== *
 *        Equal Line From Point       *
 * ================================== */

var a = wherever();
var b = wherever();
var initialSegment = Line.defineSegment(a, b, red);

var c = wherever();
var connect = Line.defineSegment(a, c, blue);

var theEquiCircle1 = Circle.defineTwoPoint(c, a);
var theEquiCircle2 = Circle.defineTwoPoint(a, c);
var equiCut = theEquiCircle1.intersect(theEquiCircle2)[0];

var equiSideOne = Line.defineSegment(a, equiCut, blue);
var equiSideTwo = Line.defineSegment(equiCut, c, blue);

var ray1 = Line.defineRay(equiCut, a);
var ray2 = Line.defineRay(equiCut, c);

var circle1 = Circle.defineTwoPoint(a, b);
var rayCut = circle1.intersect(ray1)[0];
var circle2 = Circle.defineTwoPoint(equiCut, rayCut);

var finalPoint = circle2.intersect(ray2)[0];
var finalSegment = Line.defineSegment(c, finalPoint, red);

toMove = [
    a, b, initialSegment, c, connect, equiSideOne, equiSideTwo, equiCut,
    ray1, ray2, circle1, rayCut, circle2, finalPoint, finalSegment
];

console.assert(c.dist(finalPoint).toFixed(7) == a.dist(b).toFixed(7));