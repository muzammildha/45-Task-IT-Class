var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var likelytoVisitCountries = ["China", "Russia", "Denmark", "Azerbaijan"];
console.log("original order:", likelytoVisitCountries);
console.log("In Alfabetical order:", __spreadArray([], likelytoVisitCountries, true).sort());
console.log("still Original:", likelytoVisitCountries);
console.log("Reverse Order:", __spreadArray([], likelytoVisitCountries, true).reverse());
console.log("still Original:", likelytoVisitCountries);
console.log("Original Reversed", likelytoVisitCountries.reverse());
console.log("Back To Original", likelytoVisitCountries.reverse());
console.log("Original Sorted", likelytoVisitCountries.sort());
console.log("Origina Reversed:", likelytoVisitCountries.reverse());
