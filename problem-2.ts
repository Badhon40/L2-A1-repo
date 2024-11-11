{
    //   
        const removeDuplicates=(numbers: number[]): number[]=>{
            let filterdArray:number[]=numbers.filter((val,idx)=>numbers.indexOf(val)===idx);
    
            return filterdArray;
        }
    
         console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
    // 
    }