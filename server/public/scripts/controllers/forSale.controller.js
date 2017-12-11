app.controller('ForSaleController', ['ForSaleService', function(ForSaleService){
    var self = this;

    self.listings = ForSaleService.listings;
    self.newListing = ForSaleService.newListing;
    self.addNewListing = ForSaleService.addNewListing;

    ForSaleService.getListings();
}]);