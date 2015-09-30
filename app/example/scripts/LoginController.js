angular
  .module('example')
  .controller('LoginController', function($scope) {
    $scope.navbarTitle = "Login 3";



    $scope.userLogin = function(){
       supersonic.ui.dialog.alert("test");
       if (Parse.User.current()) {
         //new ManageTodosView();
         var view = new supersonic.ui.View("example#to-do");
         supersonic.ui.layers.push(view);


       } else {
         //new LogInView();
         var view = new supersonic.ui.View("example#to-do");
         supersonic.ui.layers.push(view);

       }
    }
});
