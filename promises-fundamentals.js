

var promise = new Promise(function(resolve, reject) {
    const a = "codingsrc";
    const b = "codingsrc";
    if (a ===b) {
        resolve();
    } else {
        reject();
    }
});

promise.then(
    function(result) {
    //on fulfilled
    console.log("Success!");
},
function(error) {
    //on rejected
    console.log("Failed!")
    }
);

// 2.
promise
    .then(() => {})
    .catch(err => {
        console.log(err);
    })
    .finally(console.log("I will always execute!"));

//3. resolve on first line 

let promise = new Promise(function(resolve, reject) {
    resolve("done!");
    reject(new Error("Oops!")); //ignored
    setTimeout(() => resolve("Resolved!")); //ignored
})

