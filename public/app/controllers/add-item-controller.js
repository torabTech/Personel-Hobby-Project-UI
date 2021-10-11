angular.module('shoppingApp').controller('AddItemCtrl',addItemController);

function addItemController(ItemFactory){
    const vm = this;
  
        vm.addItem = function(){

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
    
        
         ItemFactory.addItem(data).then(function(response){
            console.log(response);
            window.location.href = '/';
        });  

    }
    
    

     
}