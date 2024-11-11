Here the  function used , getProperty, is a generic function in TypeScript that allows you to access a property of an object while ensuring type safety.

T: uses for the type of the object passed to the function.
K: uses for a key of the object T. The constraint K extends keyof T ensure that K must be one of the keys of T.



The return type is T[K], which represents the value type of the property at key K in the object T. This means the return type is the value accoudindly to the key that passed in the object

The function simply returns the value associated with the given key from the object using object[key].