angular.module('app').factory('mvSneaker', function ($resource) {
   var SneakerResource = $resource('/api/sneakers/:id', {_id: "@id"}, {
       update: {
           method: 'PUT',
           isArray: false
       },
       query: {
           method: 'GET',
           isArray: true
       }
   });
   return SneakerResource;
});