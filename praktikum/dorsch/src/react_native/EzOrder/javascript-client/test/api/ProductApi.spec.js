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

  beforeEach(function() {
    instance = new EzOrderBackend.ProductApi();
  });

  describe('(package)', function() {
    describe('ProductApi', function() {
      describe('add', function() {
        it('should call add successfully', function(done) {
          // TODO: uncomment, update parameter values for add call
          /*
          var body = new EzOrderBackend.Product();
          body.productID = "0";
          body.name = "";
          body.maxAmount = "0";
          body.packDescription = "";
          body.categoryCatID = "0";
          body.imgURL = "";

          instance.add(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteProduct', function() {
        it('should call deleteProduct successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteProduct call
          /*
          var productID = 789;

          instance.deleteProduct(productID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProductById', function() {
        it('should call getProductById successfully', function(done) {
          // TODO: uncomment, update parameter values for getProductById call and complete the assertions
          /*
          var productID = 789;

          instance.getProductById(productID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EzOrderBackend.Product);
            expect(data.productID).to.be.a('number');
            expect(data.productID).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.maxAmount).to.be.a('number');
            expect(data.maxAmount).to.be("0");
            expect(data.packDescription).to.be.a('string');
            expect(data.packDescription).to.be("");
            expect(data.categoryCatID).to.be.a('number');
            expect(data.categoryCatID).to.be("0");
            expect(data.imgURL).to.be.a('string');
            expect(data.imgURL).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProducts', function() {
        it('should call getProducts successfully', function(done) {
          // TODO: uncomment getProducts call and complete the assertions
          /*

          instance.getProducts(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(EzOrderBackend.Product);
              expect(data.productID).to.be.a('number');
              expect(data.productID).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.maxAmount).to.be.a('number');
              expect(data.maxAmount).to.be("0");
              expect(data.packDescription).to.be.a('string');
              expect(data.packDescription).to.be("");
              expect(data.categoryCatID).to.be.a('number');
              expect(data.categoryCatID).to.be("0");
              expect(data.imgURL).to.be.a('string');
              expect(data.imgURL).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateProduct', function() {
        it('should call updateProduct successfully', function(done) {
          // TODO: uncomment, update parameter values for updateProduct call
          /*
          var body = new EzOrderBackend.Product();
          body.productID = "0";
          body.name = "";
          body.maxAmount = "0";
          body.packDescription = "";
          body.categoryCatID = "0";
          body.imgURL = "";

          instance.updateProduct(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateProductWithForm', function() {
        it('should call updateProductWithForm successfully', function(done) {
          // TODO: uncomment, update parameter values for updateProductWithForm call
          /*
          var productID = 789;
          var opts = {};
          opts.name = "name_example";
          opts.status = "status_example";

          instance.updateProductWithForm(productID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
