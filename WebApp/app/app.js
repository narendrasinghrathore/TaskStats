/// <reference path="D:\Projects\TaskStats\WebApp\Scripts/angular.js" />
var app = angular.module('myApp', []);
app.controller('homeCtrl', ['$rootScope', '$scope', '$log', function ($rootScope,$scope,$log) {

    var data = {};
    var arrayStorage = [];
    data = {
        title: 'TaskStats',
        appVersion: 1.0,
        storage: arrayStorage
    }

    //region 
    $scope.newTask = {
        title: '',
        detail: '',
        assignedTo: 0,
        assignedDate: new Date().getDate(),
        dueDate: new Date().getDate(),
        compeletedOn: new Date().getDate(),
        showEdit:true,
        enableEdit:false
    };

    //endregion


    
    
    

    
    $rootScope.appData = data;
}]);