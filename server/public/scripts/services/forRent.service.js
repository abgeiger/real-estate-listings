app.service('ForRentService', ['$http', function($http) {
    var self = this;

    self.rentals = { list: [] };
    // self.newPower = {
    //     name: '',
    //     description: ''
    // }

    self.getRentals = function() {
        $http({
            method: 'GET',
            url: '/forRent'
        }).then(function(response) {
            console.log('response', response);
            
            self.powers.list = response.data;
        });
    };

    // self.addNewPower = function(newPower) {
    //     $http({
    //         method: 'POST',
    //         url: '/power',
    //         data: newPower
    //     }).then(function(response) {
    //         console.log('response', response);
    //         self.getPowers();
    //         self.newPower.name = '';
    //         self.newPower.description = '';
    //     });
    // };

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