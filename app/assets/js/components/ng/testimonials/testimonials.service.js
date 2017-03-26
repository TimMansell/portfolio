testimonialsService.$inject = ['$http'];

export default function testimonialsService($http) {
    var service = {
        get: get
    };

    return service;

    function get(){
    	return $http.get('assets/json/testimonials.json')
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
