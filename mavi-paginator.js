/*
* Mavi Angular Paginator
* 2016
* Version: 1.0.2
* */

angular.module('mavi-paginator', []).directive('paginator', ['$state','$stateParams', function ($state, $stateParams) {
    return {
        restrict: "C",
        templateUrl: 'views/paginator-view.html',
        scope: {
            paginate: "="
        },
        link: function(scope) {
            scope.$watch('paginate', function() {

                if(scope.paginate && scope.paginate['totalPages'] > 1) {
                    var paginateObj  = scope.paginate,
                        listItems    = paginateObj.totalPages,
                        setToMiddle  = false,
                        count        = 0;

                    scope.currentPage  = parseInt($stateParams.page);
                    scope.prevDisabled = scope.currentPage == 1;
                    scope.nextDisabled = scope.currentPage == listItems;

                    scope.paginator = [];
                    scope.pageState = $state.current.name;

                    if(scope.currentPage > listItems) {
                        $stateParams.page = 1;
                        $state.go($state.current, $stateParams);
                    }

                    scope.prevPage = function() {
                        if(!scope.prevDisabled) {
                            $state.go($state.current.name, {
                                page: scope.currentPage - 1
                            });
                        }
                    };

                    scope.nextPage = function() {
                        if(!scope.nextDisabled) {
                            $state.go($state.current.name, {
                                page: scope.currentPage + 1
                            });
                        }
                    };

                    if(scope.currentPage - 2 > 0 && listItems >= 5) {
                        setToMiddle = true;
                    }

                    var nextListItems = 2;

                    if(scope.currentPage + 1 == listItems) {
                        nextListItems += 1;
                    } else if(scope.currentPage == listItems) {
                        nextListItems += nextListItems + 2 < listItems ? 2 : 0;
                    }

                    for(var i = (!setToMiddle ? 1 : scope.currentPage - nextListItems); i <= listItems; i++) {
                        scope.paginator.push(i);

                        count++;

                        if(count >= listItems || count >= 5) {
                            break;
                        }
                    }
                }
            });
        }
    }
}]);