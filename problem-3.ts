{
    //
    const countWordOccurrences = (sentence: string, word: string): number => {
        const words: string[] = sentence.toLowerCase().split(" ");
        const targetWord: string = word.toLowerCase();

        let count:number = 0;
        for (let w of words) {
            if (w === targetWord) {
                count++;
            }
        }
    
        return count;
    };
    

    //  console.log(countWordOccurrences("I love typescript typescript", "typescript")); 
    
    //

}