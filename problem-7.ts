{
    // Class 

    class Car{
        make:string;
        model:string;
        year: number;


        constructor(make:string,model: string, year: number){
            this.make=make;
            this.model=model;
            this.year=year;
        }

        getCarAge(currentYear:number):number{
           return currentYear-this.year
        }
    }

    // const car=new Car("Honda","Civik",2018);
    // console.log( car.getCarAge(2024))
   
}