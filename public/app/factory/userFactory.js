angular.module('shoppingApp').factory('UserFactory',Factory);

function Factory($http){

    const getAll = function(){
        return $http.get('/api/users').then(Completed).catch(Faild);
    }

    const addOne = function(data){
        return $http.post('/api/users',data).then(Completed).catch(Faild);
    }

    const deleteOne = function(id){
        return $http.delete('/api/users/'+id).then(Completed).catch(Faild);
    }


    function Completed(response){
        return response.data;
    }
    function Faild(error){
        return error;
    }

    return {
        getAllUsers : getAll,
        addUser : addOne,
        deleteUser : deleteOne
    }
}