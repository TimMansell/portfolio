portfolioService.$inject = ['$http'];

export default function portfolioService($http) {
    var service = {
        get: get
    };

    return service;

    function get(){
    	return $http.get('assets/json/portfolio.json')
            .then(success)
            .catch(failed);

        function success(response) {
            return response.data;
        }

        function failed(error) {
            //logger.error('XHR Failed for getAvengers.' + error.data);
        }
    }
}
