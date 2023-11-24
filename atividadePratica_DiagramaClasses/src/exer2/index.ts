import { Circle, Rectangle } from "./class";

const circle = new Circle(10);
const rectangle = new Rectangle(8, 4);

circle.toDesign();
circle.resize(5);

rectangle.toDesign();
rectangle.resize(3, 1);
