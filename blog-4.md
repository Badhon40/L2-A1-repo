The function calculateShapeArea calculates the area of a shape, which can either be a circle or a rectangle. The shape type determines the formula used to compute its area.


Defining Shape Types:

Circle and Rectangle types are defined, each with a unique shape property to distinguish between them.
Circle includes a radius, while Rectangle includes height and width.
The Shape type is a union of Circle and Rectangle, allowing calculateShapeArea to accept either type as an argument.
Function Logic:

Circle Check: First, the function checks if the shape is a circle (by verifying shape.shape === "circle" and that it has a radius). If true, it calculates the area using the formula: π * radius * radius.
Rectangle Check: If the shape is a rectangle (shape.shape === "rectangle") and has width and height properties, it calculates the area as width * height.
Returning the Area:

The function returns the calculated area for either shape. If neither type matches, it returns 0 as a fallback.