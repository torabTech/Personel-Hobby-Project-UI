angular.module('shoppingApp').factory('ItemFactory',Factory);

function Factory($http){

    const getAll = function(){
        return $http.get('/api/items').then(Completed).catch(Faild);
    }

    const addOne = function(data){
        return $http.post('/api/items',data).then(Completed).catch(Faild);
    }

    const getOne = function(id){
        return $http.get('/api/items/'+id).then(Completed).catch(Faild);
    }

    const getOneByName = function(name){
        return $http.get('/api/items/search/'+name).then(Completed).catch(Faild);
    }

    const updateOne = function(data,id){
        return $http.put('/api/items/'+id,data).then(Completed).catch(Faild);
    }

    const deleteOne = function(id){
        return $http.delete('/api/items/'+id).then(Completed).catch(Faild);
    }
    function Completed(response){
        return response.data;
    }
    function Faild(error){
        return error;
    }

    return {
        getAllItems : getAll,
        addItem : addOne,
        getItem : getOne,
        updateItem : updateOne,
        deleteItem : deleteOne,
        searchByName :getOneByName
    }
}