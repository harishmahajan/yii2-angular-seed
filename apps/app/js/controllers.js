'use strict';

define(['angular', 'd3', 'd3Cloud', 'services'], function (angular, d3) {
    /* Controllers */
    return angular.module('oc.controllers', ['oc.services'])
        .controller('InitCtrl', ['$scope', function ($scope) {
              var fill = d3.scale.category20();

              d3.layout.cloud().size([300, 300])
                  .words([
                    "Hello", "world", "normally", "you", "want", "more", "words",
                    "than", "this","Cat", "want", "selectAll", "svg","Hello", "world", "normally", "you", "want", "more", "words",
                    "than", "this","Cat", "want", "selectAll", "svg"].map(function(d) {
                    return {text: d, size: 10 + Math.random() * 10};
                  }))
                  .padding(5)
                  .rotate(function() { return ~~(Math.random() * 3) * 60; })
                  .font("Impact")
                  .fontSize(function(d) { return d.size; })
                  .on("end", draw)
                  .start();

              function draw(words) {
                d3.select("body").append("svg")
                    .attr("width", 300)
                    .attr("height", 300)
                  .append("g")
                    .attr("transform", "translate(150,150)")
                  .selectAll("text")
                    .data(words)
                  .enter().append("text")
                    .style("font-size", function(d) { return d.size + "px"; })
                    .style("font-family", "Impact")
                    .style("fill", function(d, i) { return fill(i); })
                    .attr("text-anchor", "middle")
                    .attr("transform", function(d) {
                      return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                    })
                    .text(function(d) { return d.text; });
              }
        }])
        // More involved example where controller is required from an external file
        .controller('MyCtrl2', ['$scope', '$injector', function($scope, $injector) {
            require(['controllers/myctrl2'], function(myctrl2) {
                // injector method takes an array of modules as the first argument
                // if you want your controller to be able to use components from
                // any of your other modules, make sure you include it together with 'ng'
                // Furthermore we need to pass on the $scope as it's unique to this controller
                $injector.invoke(myctrl2, this, {'$scope': $scope});
            });
        }]);
});
