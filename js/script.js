function makeMultiplier(multiplier) {
    function b() {
        console.log("multiplier is " + multiplier);
    }
    b();
    return (
        function(x) {
            return x * multiplier;
        }
    );
}
var doubler = makeMultiplier(2);
console.log(doubler(5));
(function(kihobe) {
    console.log("kodu baba" + kihobe);
})(" kemon aso");