function describe_city(nameofcity, country) {
    if (country === void 0) { country = "pakistan"; }
    return "".concat(nameofcity, " is in ").concat(country);
}
;
//3 cities
var city1 = describe_city("Islamabad", "Pakistan");
var city2 = describe_city("Rome", "Italy");
var city3 = describe_city("Istanbul", "Turkey");
console.log(city1);
console.log(city2);
console.log(city3);
