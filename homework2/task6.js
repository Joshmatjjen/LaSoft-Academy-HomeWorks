const nn = new Promise((res, rej) => {
  setTimeout(() => res("done"), 1000);
});

console.log((typeof nn).toLowerCase()); // object;

// Result: object;

// Reason for result:
// Promise return an object,
// if the the Promise is not resolved maybe due time timeout, it becomes Pending.
// Therefore: Promise { <pending> }
// Then: The data type for this promise is object
