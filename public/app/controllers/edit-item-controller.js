angular.module('shoppingApp').controller('EditItemCtrl',editItemController);

function editItemController(ItemFactory,$routeParams){
    const vm = this;
  
        vm.showItem = function(){
            const id = $routeParams.id;
            ItemFactory.getItem(id).then(function(response){
                console.log(response);

                vm.item = response.item;
                vm.price = parseInt(response.price);
                vm.stockQty = parseInt(response.stockQty);
                vm.unit = response.unit;
        
                vm.munifacturer = response.item_specification.munifacturer;
                vm.weight = response.item_specification.weight;
                vm.color = response.item_specification.color;
                vm.description = response.item_specification.description; 

                });
        }


        vm.updateItem = function(){

        let color = '';

        if(vm.colorBlack){
          color = 'black';
        }else if(vm.colorWhite){
            color = 'white';
        }else{
            color='silver';
        }

        const data = {
            item : vm.item,
            price : vm.price,
            stockQty : vm.stockQty,
            unit : vm.unit,
            item_specification:{
                munifacturer: vm.munifacturer,
                weight : vm.weight,
                color: color,
                description:vm.description
            }
        }

        const id = $routeParams.id;
    
         ItemFactory.updateItem(data,id).then(function(response){
            console.log(response);
            window.location.href = '/';
        });  

    }
    
    

     
}