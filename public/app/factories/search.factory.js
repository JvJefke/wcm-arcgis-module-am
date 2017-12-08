"use strict";

angular
	.module("arcgis-am_1.0.1.factories")
	.factory("arcgisAMFactory", [
		"$http",
		"configuration",

		function(
			$http,
			configuration
		) {
			var api = configuration.serverPath + configuration.apiPrefix + configuration.apiLevel;
			var factory = {};

			factory.reindexSearch = function() {
				return $http.put(api + "arcgis-am/reindex");
			};

			return factory;
		},
	]);