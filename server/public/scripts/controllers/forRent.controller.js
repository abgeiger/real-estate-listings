app.controller('ForRentController', ['ForRentService', function(ForRentService){
    var self = this;

    self.rentals = ForRentService.rentals;
}]);