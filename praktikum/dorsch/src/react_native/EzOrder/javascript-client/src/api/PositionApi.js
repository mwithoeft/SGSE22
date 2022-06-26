/*
 * EzOrder Backend
 * API Description for EzOrder Rest-Backend
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Position'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Position'));
  } else {
    // Browser globals (root is window)
    if (!root.EzOrderBackend) {
      root.EzOrderBackend = {};
    }
    root.EzOrderBackend.PositionApi = factory(root.EzOrderBackend.ApiClient, root.EzOrderBackend.Position);
  }
}(this, function(ApiClient, Position) {
  'use strict';

  /**
   * Position service.
   * @module api/PositionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new PositionApi. 
   * @alias module:api/PositionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deletePosition operation.
     * @callback module:api/PositionApi~deletePositionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a position
     * 
     * @param {Number} positionID position id to delete
     * @param {module:api/PositionApi~deletePositionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePosition = function(positionID, callback) {
      var postBody = null;

      // verify the required parameter 'positionID' is set
      if (positionID === undefined || positionID === null) {
        throw new Error("Missing the required parameter 'positionID' when calling deletePosition");
      }


      var pathParams = {
        'positionID': positionID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/position/{positionID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPositionById operation.
     * @callback module:api/PositionApi~getPositionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Position} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find position by ID
     * Returns a single position
     * @param {Number} positionID ID of position to return
     * @param {module:api/PositionApi~getPositionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Position}
     */
    this.getPositionById = function(positionID, callback) {
      var postBody = null;

      // verify the required parameter 'positionID' is set
      if (positionID === undefined || positionID === null) {
        throw new Error("Missing the required parameter 'positionID' when calling getPositionById");
      }


      var pathParams = {
        'positionID': positionID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Position;

      return this.apiClient.callApi(
        '/position/{positionID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPositions operation.
     * @callback module:api/PositionApi~getPositionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Position>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all positions
     * 
     * @param {module:api/PositionApi~getPositionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Position>}
     */
    this.getPositions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Position];

      return this.apiClient.callApi(
        '/position', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the placePosition operation.
     * @callback module:api/PositionApi~placePositionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Position} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Place an position
     * 
     * @param {module:model/Position} body position placed
     * @param {module:api/PositionApi~placePositionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Position}
     */
    this.placePosition = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling placePosition");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Position;

      return this.apiClient.callApi(
        '/position', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePositionWithForm operation.
     * @callback module:api/PositionApi~updatePositionWithFormCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a position with form data
     * 
     * @param {Number} positionID ID of position that needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Updated name of the position
     * @param {String} opts.status Updated status of the position
     * @param {module:api/PositionApi~updatePositionWithFormCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatePositionWithForm = function(positionID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'positionID' is set
      if (positionID === undefined || positionID === null) {
        throw new Error("Missing the required parameter 'positionID' when calling updatePositionWithForm");
      }


      var pathParams = {
        'positionID': positionID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'name': opts['name'],
        'status': opts['status']
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/position/{positionID}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));