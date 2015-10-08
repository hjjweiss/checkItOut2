angular
  .module('example')
  .controller('FormController', function($scope) {

if (Parse.User.current()) {
  new todo();
} else {
  new initialview();
}

Parse.User.logIn(username, password, {
  success: function(user) {
    new todo();
    self.undelegateEvents();
  },
  error: function(user, error) {
    self.$(".login-form .error").html("Invalid username or password. Please try again.").show();
    this.$(".login-form button").removeAttr("disabled");
  }
  });

Parse.User.signUp(username, password, {ACL: new Parse.ACL()}, {
  success: function(user) {
    new todo();
    self.undelegateEvents();
    delete self;
  }
  error: function (user, error) {
    self.$(".signup-form .error").html(error.message).show();
    this.$(".signup-form button").removeAttr("disabled");
  }
});

    $scope.userLogin = function(form) {
        supersonic.logger.info(form);
        supersonic.logger.info($scope.name);

      var user = new Parse.User();
        user.set("first name", $scope.name);
        user.set("last name", "my pass");
        user.set("email address", $scope.email);

        // other fields can be set just like with Parse.Object
        user.set("phone", "650-555-0001");

        user.signUp(null, {
          success: function(user) {
            // Hooray! Let them use the app now.
            supersonic.logger.info("user added");
          },
          error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            supersonic.logger.error("Error: " + error.code + " " + error.message);
          }
      });
    }

    $scope.dataTest = function(){
       supersonic.logger.info("test");
       var ListObject = Parse.Object.extend("ListObject");
       //supersonic.logger.info (ListObject) ;
       var listObject = new ListObject();
       listObject.save({item: "milk"}).then(function(object) {
         supersonic.logger.info("milk saved");
  });
    }

});
