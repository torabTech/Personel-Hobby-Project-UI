angular
  .module("shoppingApp")
  .controller("SingleItemCtrl", singleItemController);

function singleItemController(ItemFactory,$routeParams) {
  const vm = this;

    const id = $routeParams.id;
   
    ItemFactory.getItem(id).then(function(response){
        console.log(response);
        
        vm.item = response;
    });  

  
}
