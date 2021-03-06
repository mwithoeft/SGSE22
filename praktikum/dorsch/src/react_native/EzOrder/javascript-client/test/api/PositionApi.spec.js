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
    instance = new EzOrderBackend.PositionApi();
  });

  describe('(package)', function() {
    describe('PositionApi', function() {
      describe('deletePosition', function() {
        it('should call deletePosition successfully', function(done) {
          // TODO: uncomment, update parameter values for deletePosition call
          /*
          var positionID = 789;

          instance.deletePosition(positionID, function(error, data, response) {
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
      describe('getPositionById', function() {
        it('should call getPositionById successfully', function(done) {
          // TODO: uncomment, update parameter values for getPositionById call and complete the assertions
          /*
          var positionID = 789;

          instance.getPositionById(positionID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EzOrderBackend.Position);
            expect(data.positionID).to.be.a('number');
            expect(data.positionID).to.be("0");
            expect(data.amount).to.be.a('number');
            expect(data.amount).to.be("0");
            expect(data.productProductID).to.be.a('number');
            expect(data.productProductID).to.be("0");
            expect(data.orderingOrderID).to.be.a('number');
            expect(data.orderingOrderID).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPositions', function() {
        it('should call getPositions successfully', function(done) {
          // TODO: uncomment getPositions call and complete the assertions
          /*

          instance.getPositions(function(error, data, response) {
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
              expect(data).to.be.a(EzOrderBackend.Position);
              expect(data.positionID).to.be.a('number');
              expect(data.positionID).to.be("0");
              expect(data.amount).to.be.a('number');
              expect(data.amount).to.be("0");
              expect(data.productProductID).to.be.a('number');
              expect(data.productProductID).to.be("0");
              expect(data.orderingOrderID).to.be.a('number');
              expect(data.orderingOrderID).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('placePosition', function() {
        it('should call placePosition successfully', function(done) {
          // TODO: uncomment, update parameter values for placePosition call and complete the assertions
          /*
          var body = new EzOrderBackend.Position();
          body.positionID = "0";
          body.amount = "0";
          body.productProductID = "0";
          body.orderingOrderID = "0";

          instance.placePosition(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EzOrderBackend.Position);
            expect(data.positionID).to.be.a('number');
            expect(data.positionID).to.be("0");
            expect(data.amount).to.be.a('number');
            expect(data.amount).to.be("0");
            expect(data.productProductID).to.be.a('number');
            expect(data.productProductID).to.be("0");
            expect(data.orderingOrderID).to.be.a('number');
            expect(data.orderingOrderID).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updatePositionWithForm', function() {
        it('should call updatePositionWithForm successfully', function(done) {
          // TODO: uncomment, update parameter values for updatePositionWithForm call
          /*
          var positionID = 789;
          var opts = {};
          opts.name = "name_example";
          opts.status = "status_example";

          instance.updatePositionWithForm(positionID, opts, function(error, data, response) {
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
