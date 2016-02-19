angular.module('alurapic')
    .controller('FotosController', function ($scope) {


        $scope.fotos = [
            {
                titulo: 'Placeholder 1',
                url: 'https://placehold.it/150x150'
            },
            {
                titulo: 'Placeholder 2',
                url: 'https://placehold.it/150x150'
            },
            {
                titulo: 'Placeholder 3',
                url: 'https://placehold.it/150x150'
            }
        ];

    });