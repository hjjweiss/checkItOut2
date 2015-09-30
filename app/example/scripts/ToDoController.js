angular
  .module('example')
  .controller('ToDoController', function($scope) {
    $scope.navbarTitle = "Login 3";

  

    $scope.dataTest = function(){
       supersonic.ui.dialog.alert("test");
       var ListObject = Parse.Object.extend("ListObject");
var listObject = new ListObject();
listObject.save({item: "milk"}).then(function(object) {
  supersonic.ui.dialog.alert("milk saved");
});
    }
});
