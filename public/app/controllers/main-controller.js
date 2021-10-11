angular.module('shoppingApp').controller('MainCtrl',mainController);

function mainController(ItemFactory,$route){
    const vm = this;

   
    ItemFactory.getAllItems().then(function(response){
        console.log(response);
        vm.items = response;
    });

    vm.delete = function(id){

        if (confirm("Are you sure to delete Item?"))
           {
                ItemFactory.deleteItem(id).then(function(response){
                    if(response){
                        alert(JSON.stringify(response.message));
                        $route.reload();
                    }
                });

           }
  
    }

    vm.search = function(data){
        ItemFactory.searchByName(data).then(function(response){
          
            if(Object.keys(response).length != 0){
                vm.items = response;
               // window.location.href = '/'
            }else{

                alert('record not found')
            }
                
            
        })
    }

   
    vm.detectEmpty = function(value) {
        
        if (value.trim().length === 0) {
            ItemFactory.getAllItems().then(function(response){
                console.log(response);
                vm.items = response;
            });
        }
    }

    
}