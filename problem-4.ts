{
    //type guard

    type Circle ={
        shape:"circle";
        radius: number;
    };

    type Rectangle={
        shape:"rectangle";
        height: number;
        width: number;
       
    };

    type Shape= Circle | Rectangle;

    const calculateShapeArea=( shape:Shape) : number=>{
        if(shape.shape==="circle" && "radius" in shape){
            return Math.PI* shape.radius* shape.radius
        }
       else if( shape.shape==='rectangle' && "width" in shape && "height" in shape){
            return shape.height* shape.width;
        }

        return 0;
    }
    // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // console.log(circleArea)
    // const rectangleArea = calculateShapeArea({
    //     shape: "rectangle",
    //     width: 4,
    //     height: 6,
    //   });

    //   console.log(rectangleArea)
      
}