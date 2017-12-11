app.controller('ForSaleController', ['ForSaleService', function(ForSaleService){
    var self = this;

    self.listings = ForSaleService.listings;
    ForSaleService.getListings();
}]);