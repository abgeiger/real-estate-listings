app.service('ForRentService', ['$http', function($http) {
    var self = this;

    self.rentals = { list: [] };

    self.newRental = {
        rent: '',
        sqft: '',
        city: ''
    }

    self.getRentals = function() {
        $http({
            method: 'GET',
            url: '/forRent'
        }).then(function(response) {
            console.log('response', response);
            
            self.rentals.list = response.data;
        });
    };

    self.addNewRental = function(newRental) {
        $http({
            method: 'POST',
            url: '/forRent',
            data: newRental
        }).then(function(response) {
            console.log('response', response);
            self.getRentals();
            self.newRental.rent = '';
            self.newRental.sqft = '';
            self.newRental.city = '';
        });
    };

    // self.savePower = function(power) {
    //     $http({
    //         method: 'PUT',
    //         url: '/power',
    //         params: power
    //     }).then(function(response) {
    //         console.log('response', response);
    //         self.getPowers();
    //     });
    // };
}]);