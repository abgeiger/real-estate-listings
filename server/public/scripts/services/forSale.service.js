app.service('ForSaleService', ['$http', function($http) {
    var self = this;

    self.listings = { list: [] };
    // self.newPower = {
    //     name: '',
    //     description: ''
    // }

    self.getListings = function() {
        $http({
            method: 'GET',
            url: '/forSale'
        }).then(function(response) {
            console.log('response', response);
            
            self.listings.list = response.data;
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