angular.module('angularcustomtooltip').
  directive('customTooltip',function() {
    return {
        restrict: 'A',
        link: function(scope,element,attrs){
            var targetTag = "#"+attrs['id']
            angular.element(targetTag).wTooltip({
                delay:0,
                offsetX:50,
                offsetY:50,
                content: "<img src="+attrs['tooltipUrl']+" alt='bigger image' />"
            });
        }
    };
});

