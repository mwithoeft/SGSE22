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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EzOrderBackend);
  }
}(this, function(expect, EzOrderBackend) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Position', function() {
      beforeEach(function() {
        instance = new EzOrderBackend.Position();
      });

      it('should create an instance of Position', function() {
        // TODO: update the code to test Position
        expect(instance).to.be.a(EzOrderBackend.Position);
      });

      it('should have the property positionID (base name: "positionID")', function() {
        // TODO: update the code to test the property positionID
        expect(instance).to.have.property('positionID');
        // expect(instance.positionID).to.be(expectedValueLiteral);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property productProductID (base name: "product_productID")', function() {
        // TODO: update the code to test the property productProductID
        expect(instance).to.have.property('productProductID');
        // expect(instance.productProductID).to.be(expectedValueLiteral);
      });

      it('should have the property orderingOrderID (base name: "ordering_orderID")', function() {
        // TODO: update the code to test the property orderingOrderID
        expect(instance).to.have.property('orderingOrderID');
        // expect(instance.orderingOrderID).to.be(expectedValueLiteral);
      });

    });
  });

}));