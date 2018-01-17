for (var i = 0; i < 5; i++) {
    sm(i, function (r) {
        console.log(this, r);
    }.bind(i))
}


test
function sm(i, cb) {
    setTimeout(() => {
        cb(i)
    }, 1);
}