function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Type Script"; }
    console.log("Making a ".concat(size, " t_shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt(); // default large and message
make_shirt("medium"); //default message, medium size
make_shirt("small", "drive into coding"); //custom message, small size
