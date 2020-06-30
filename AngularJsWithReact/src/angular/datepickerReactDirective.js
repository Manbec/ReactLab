import app from '../../main'
import React from "react";
import ReactDOM from "react-dom";
import AppDatePicker from "../react/DatePicker";

const reactDirective = app.directive('datepickerReactDirective', function() {
  return {
      template: '<div id="app-datepicker" class="react-part"></div>',
      scope: {
        startDate: '=',
        setDate:'&'
      },
      link: function(scope, el, attrs){
            // scope.markComplete = (todoItem) => {scope.markItemCompleted(todoItem)}

            const reactapp = document.getElementById('app-datepicker');
            console.log('hmmm', scope.setDate);
            scope.$watch('startDate', function(newValue, oldValue) {
                // if (newValue != oldValue) {
                 ReactDOM.render(
                    <AppDatePicker startDate={newValue} setDate={scope.setDate}/>
                    , reactapp);
                // }
            }, true);

        }
    }
})

export default reactDirective
