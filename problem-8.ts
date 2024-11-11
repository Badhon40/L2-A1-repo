{
    //
    const validateKeys = <T,K extends keyof T>(object: T, keys: K[]): boolean => {
        for (let key of keys) {
            if (!(key in object)) {
                return false;
            }
        }
        return true;
    };
    // const person = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(validateKeys(person, ["name", "age"])); // Output: true
    // console.log(validateKeys(person, ["name", "address"]));
    
}