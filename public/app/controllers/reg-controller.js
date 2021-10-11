angular.module('shoppingApp').controller('RegCtrl',Registeration);

function Registeration(UserFactory,$route){
    
    const vm = this;

        vm.addUser = function(){

        let gender = '';


        if(vm.male){
          gender = 'male';
        }else{
            gender='female';
        }

        const data = {
            username : vm.username,
            email : vm.email,
            password : vm.password,
            gender : gender,
        }
    
        console.log(data)
        UserFactory.addUser(data).then(function(response){
            console.log(response);
           // window.location.href = '/';
           $route.reload();
        });  

    }

    vm.getAllUsers = function(){
        UserFactory.getAllUsers().then(function(response){
            console.log(response);
            vm.users = response;
        });
    }
    
}