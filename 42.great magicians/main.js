var magicians = ['Chris', 'John', 'Michael'];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the Great";
    }
}
make_great(magicians); //modifies the original array
//showmagicins (magicians); //shows modified names
