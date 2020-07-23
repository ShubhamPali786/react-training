// PROMISE
// async & callbacks

// request -> process -> response (success,fail)

function asyncWithCallbacks(success, fail) {
  setTimeout(function () {
    success("callback success");
  }, 1000);

  setTimeout(function () {
    fail("callback fails");
  }, 3000);
}

// asyncWithCallbacks(
//   function (data) {
//     console.log("success", data);
//   },
//   function (err) {
//     console.log("error", err);
//   }
// );

// PROMISE

// waiting => fulfilled (resolved/rejected)

function asyncWithPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("promise success");
    }, 1000);

    setTimeout(function () {
      reject("promise fails");
    }, 3000);
  });
}
asyncWithPromise()
  .then(function (data) {
    console.log("success", data);
  })
  .catch(function (err) {
    console.log("error promise", err);
  });
