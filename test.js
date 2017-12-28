for (var i = 0; i < 5; i++) {
    // setTimeout(function () {
    //     console.log(i);
    // }, 1);
    sm(i, function (r) {
        console.log(this, r);
    }.bind(i))
}

function sm(i, cb) {
    setTimeout(() => {
        cb(i)
    }, 1);
}


// for (var i = 0; i < 5; ++i) {
//     setTimeout(function () {
//         console.log(this);
//     }.bind(i), 1);
// }

// for (var i = 25; i < 30; ++i) {
//     setTimeout(
//         (function (j) {
//             return function () {
//                 console.log(j);
//             }
//         })(i)
//         , 1);
// }