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
    describe('Product', function() {
      beforeEach(function() {
        instance = new EzOrderBackend.Product();
      });

      it('should create an instance of Product', function() {
        // TODO: update the code to test Product
        expect(instance).to.be.a(EzOrderBackend.Product);
      });

      it('should have the property productID (base name: "productID")', function() {
        // TODO: update the code to test the property productID
        expect(instance).to.have.property('productID');
        // expect(instance.productID).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property maxAmount (base name: "maxAmount")', function() {
        // TODO: update the code to test the property maxAmount
        expect(instance).to.have.property('maxAmount');
        // expect(instance.maxAmount).to.be(expectedValueLiteral);
      });

      it('should have the property packDescription (base name: "packDescription")', function() {
        // TODO: update the code to test the property packDescription
        expect(instance).to.have.property('packDescription');
        // expect(instance.packDescription).to.be(expectedValueLiteral);
      });

      it('should have the property categoryCatID (base name: "category_catID")', function() {
        // TODO: update the code to test the property categoryCatID
        expect(instance).to.have.property('categoryCatID');
        // expect(instance.categoryCatID).to.be(expectedValueLiteral);
      });

      it('should have the property imgURL (base name: "imgURL")', function() {
        // TODO: update the code to test the property imgURL
        expect(instance).to.have.property('imgURL');
        // expect(instance.imgURL).to.be(expectedValueLiteral);
      });

    });
  });

}));
