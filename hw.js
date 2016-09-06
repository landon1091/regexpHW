/**
 * A set of functions that validate an input (string) and return a
 * boolean value indicating whether the provided string matches the
 * specified pattern.
 */
module.exports = {


    /**
     * A valid name includes alphabetic characters or hyphens, and must
     * be at least two characters long.
     */
    name: function (input) {
let x = new RegExp('[a-zA-z- ]{2,}');
return x.test(input);
    },

    /**
     * A valid phone number may or may not include an area code. If it
     * does, it should be a total of ten digits. If it doesn't, it should
     * be a total of seven digits.
     */
    phone: function (input) {
let x = new RegExp('\(?[0-9]+\)? [0-9]+[ -]?[0-9]+');
return x.test(input);
    },
    /**
     * A valid email address includes alphanumeric characters, underscores, 
     * or periods before the @ symbol, followed by an @, followed by a valid
     * domain name.
     */
    email: function (input) {
let x = new RegExp('[a-zA-Z\.]{1,}@[a-zA-Z]+\.[a-z]+[\.]?[a-z]+');
return x.test(input);
    },
    /**
     * A valid street address includes a building number, followed by a 
     * street name, followed by either {Ave, St, Park, Lane, Blvd}. It 
     * does not include city name, state name, country, zip code, or any
     * other information.
     */
    address: function (input) {
let x = new RegExp('[0-9]+ [a-zA-Z ?]+ [|St|Ave|Park|Lane|Blvd]+');
return x.test(input);
    },
    /**
     * A valid username is between four and sixteen characters long and
     * can contain numbers or letters. It must start with a letter.
     */
    username: function (input) {
let x = new RegExp('^[a-zA-Z0-9]{4,16}$');
return x.test(input);
    },
    /**
     * A valid URL contains the protocol (http, https) as well as a valid
     * domain name. It can include any number of subdirectories, and may or
     * may not end with a file name.
     */
    url: function (input) {
let x = new RegExp('[http|https]+[://]+[a-zA-Z@]+[\.a-z@]+');
return x.test(input);
    },

    /**
     * A valid IPv4 address is split into four sections with a period between
     * each section. Each section can include from one to three digits.
     */
    ipaddr: function (input) {
let x = new RegExp('[0-9]{1,3}[\.][0-9]{1,3}[\.][0-9]{1,3}[\.][0-9]{1,3}');
return x.test(input);
    },
};