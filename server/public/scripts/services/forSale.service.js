app.service('ForSaleService', ['$http', function($http) {
    var self = this;

    self.listings = { list: [] };
    self.newListing = {
        cost: '',
        sqft: '',
        city: ''
    }

    self.getListings = function() {
        $http({
            method: 'GET',
            url: '/forSale'
        }).then(function(response) {
            console.log('response', response);
            
            self.listings.list = response.data;
        });
    };

    self.addNewListing = function(newListing) {
        $http({
            method: 'POST',
            url: '/forSale',
            data: newListing
        }).then(function(response) {
            console.log('response', response);
            self.getListings();
            self.newListing.cost = '';
            self.newListing.sqft = '';
            self.newListing.city = '';
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