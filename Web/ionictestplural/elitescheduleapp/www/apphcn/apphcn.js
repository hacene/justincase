angular.module("EliteApp", ["ionic"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('homehcn', {
    abstract: true,
    url: '/homehcn',
    templateUrl: 'apphcn/homehcn/homehcn.html',
    })
    
    .state('homehcn.leagues', {
     url: '/leagues',
     views : {
         "tab-leagues" : {
                            templateUrl: 'apphcn/homehcn/leagues.html'
                        }
            }
    })
    
    .state('homehcn.myteams', {
    url: '/myteams',
    views : {
        "tab-myteams": {
            templateUrl: 'apphcn/homehcn/myteams.html'}
            }
    })
        
        
    .state('myapp', {
    abscract : true,
    url: '/myapp',
    templateUrl: "apphcn/layouthcn/menu-layout.html",
        
    } 
    )
    
    .state('myapp.teams', {
    url : "teams",
    views :{
            'mainContent': {
                templateUrl: 'apphcn/homehcn/teams.html'    
                }
            }
    })
    
    .state('myapp.teams-detail', {
    url : "teamdetail/:id",
    views :{
            'mainContent': {
                templateUrl: 'apphcn/homehcn/team-detail.html'    
                }
            }
    })
    
    
    .state('myapp.game', {
    url : "game/:id",
    views :{
            'mainContent': {
                templateUrl: 'apphcn/homehcn/game.html'    
                }
            }
    })
    
    .state('myapp.standings', {
    url : "standings",
    views :{
            'mainContent': {
                templateUrl: 'apphcn/homehcn/standings.html'    
                }
            }
    })
    
    .state('myapp.locations', {
    url : "locations",
    views :{
            'mainContent': {
                templateUrl: 'apphcn/homehcn/locations.html'    
                }
            }
    })
    
    .state('myapp.rules', {
    url : "rules",
    views :{
            'mainContent': {
                templateUrl: 'apphcn/homehcn/rules.html'    
                }
            }
    })
    ;
    
    // fall back route in case none is matched 
    $urlRouterProvider.otherwise('/myapp');
  });
  
  
