var app= angular.module("ShoppingListCheckOff",[])

app.controller("ToBuyController",function($scope,buyservice){
    $scope.toBuyList=buyservice.toBuyList;
    $scope.length = $scope.toBuyList.length;
    $scope.changelist = function(item){
        $scope.toBuyList = buyservice.change(item);
        $scope.length = $scope.toBuyList.length;
    }
})

app.controller("AlreadyBoughtController",function($scope,buyservice){
    $scope.boughtList = buyservice.bought;      
})

app.service("buyservice",function(){
    this.toBuyList = [
        {"name":"cookies","qty":10},
        {"name":"chocos","qty":15},
        {"name":"soap","qty":5},
        {"name":"shampoo","qty":2},
        {"name":"juice","qty":5}
    ]

    this.bought=[]
    
    this.change = function(item){
        boughtitem = this.toBuyList.splice(this.toBuyList.indexOf(item),1);
        this.bought.push(boughtitem[0]);
        return this.toBuyList;
    }
})