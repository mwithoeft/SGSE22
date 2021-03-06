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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EzOrderBackend) {
      root.EzOrderBackend = {};
    }
    root.EzOrderBackend.User = factory(root.EzOrderBackend.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The User model module.
   * @module model/User
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   * @param userID {Number} 
   */
  var exports = function(userID) {
    this.userID = userID;
  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('userID'))
        obj.userID = ApiClient.convertToType(data['userID'], 'Number');
      if (data.hasOwnProperty('lastname'))
        obj.lastname = ApiClient.convertToType(data['lastname'], 'String');
      if (data.hasOwnProperty('firstname'))
        obj.firstname = ApiClient.convertToType(data['firstname'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('authToken'))
        obj.authToken = ApiClient.convertToType(data['authToken'], 'String');
      if (data.hasOwnProperty('street'))
        obj.street = ApiClient.convertToType(data['street'], 'String');
      if (data.hasOwnProperty('zip'))
        obj.zip = ApiClient.convertToType(data['zip'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('company'))
        obj.company = ApiClient.convertToType(data['company'], 'String');
      if (data.hasOwnProperty('department'))
        obj.department = ApiClient.convertToType(data['department'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} userID
   */
  exports.prototype.userID = undefined;

  /**
   * @member {String} lastname
   */
  exports.prototype.lastname = undefined;

  /**
   * @member {String} firstname
   */
  exports.prototype.firstname = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * @member {String} authToken
   */
  exports.prototype.authToken = undefined;

  /**
   * @member {String} street
   */
  exports.prototype.street = undefined;

  /**
   * @member {String} zip
   */
  exports.prototype.zip = undefined;

  /**
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * @member {String} company
   */
  exports.prototype.company = undefined;

  /**
   * @member {String} department
   */
  exports.prototype.department = undefined;


  return exports;

}));
