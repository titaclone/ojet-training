/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./my-fullcalendar-view.html', './my-fullcalendar-viewModel', 'text!./component.json', 'css!./my-fullcalendar-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('my-fullcalendar', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);