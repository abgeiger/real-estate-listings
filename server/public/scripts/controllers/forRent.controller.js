app.controller('ForRentController', ['ForRentService', function(ForRentService){
    var self = this;

    self.rentals = ForRentService.rentals;
    self.newRental = ForRentService.newRental;
    self.addNewRental = ForRentService.addNewRental;
    ForRentService.getRentals();
}]);