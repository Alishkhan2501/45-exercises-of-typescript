function city_country(city, country) {
    //return `"${city}, ${country}"`
    console.log("\"".concat(city, ", ").concat(country, "\""));
}
city_country("Islamabad", "Pakistan");
var mycities = city_country("Islamabad", "Pakistan");
console.log(mycities);
console.log(city_country("NewYork", "UnitedState"));
console.log(city_country("England", "London"));
console.log(city_country("Bern", "Switzerland"));
