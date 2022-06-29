
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({
    amount: 12000,
    years: 3,
    rate: 6.0,
  })).toEqual("365.06")
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({
    amount: 12500,
    years: 3,
    rate: 6.0,
  })).toEqual("380.27")
});

/// etc
