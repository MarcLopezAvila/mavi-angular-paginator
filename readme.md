# Mavi-angular-paginator

Simple pagination module fo Angular 1 and ui-router.

## Install

1. Be sure you have angular and ui-router installed
2. Add mavi-paginator module script.
3. Add "paginator" class to the element which is going to contain the pagination elements.
4. To have it working you should pass from controller to "paginate" attribute the object which contains the information of:
* Total pages of the full pagination
* Items per page (example 10 items per page)
* Total items 

#####Object:

```
"paginate": {"totalPages":39,"itemsPerPage":10,"totalItems":387};
```

###Usage

App module

```html
<script>
    var App = angular.module('App', ['mavi-paginator','ui.router']);
    
    //Ui-router
    App.config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('customstate', {
                    url: '/customurl/:page',
                    templateUrl: 'template.html',
                    controller: 'theController',
                    params: {
                        page: "1"
                    }
                });
    }]);
    
    //Controller
    App.controller('theController', ['$scope', function($scope) {
        $scope.paginate = {
            "totalPages":39,
            "itemsPerPage":10,
            "totalItems":387
        };
    });
</script>
```

Template html

```html
<html lang="en" ng-app="App">
<head>
   <script src="angular.js"></script>
   <script src="ui-state.js"></script>
   <script src="mavi-paginator.js"></script>
   
   <script src="app.js"></script>
</head>
<body ng-controller="theController">
    ....
    
    <div class="paginator" paginate="paginate"></div>
    
    ....
</body>
</html>
```

### Prerequisites

```
Angular 1
Ui-router
```

Nothing more ;)

