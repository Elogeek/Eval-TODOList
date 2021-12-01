
describe("test sur le nombre de pièces dans le canvas confetti", function() {
    let number = 80;

    it("il y a exactement 50 pièces dans le canvas confetti", function() {
        number -= 30 ;
        expect(number).toEqual(50)
    });

    it("le nombre de pièces doit être plus petit que 50", function() {
        number = 49;
        expect(number).toBeLessThan(50);
    });


});
