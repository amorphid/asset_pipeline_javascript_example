Asset Pipeline JavaScript Example
=================================

Sequence of events:
* run `bundle exec rails s`
* Rails finds all of the JavaScript files in these directories
  * /app/assets/javascripts
  * /lib/assets/javascripts
  * /vendor/assets/javascripts
* Someone visits http://localhost:3000/
* The view is rendered, which loads the requested JavaScript code, based on what's requested in the view
* Because the italicizer depends on HTML to execute properly, it fails then executed before it's HTML depency has been loaded
* The italicizer works if it's executed after the document has completed loading

# [RailsGuides:  The Asset Pipeline](http://guides.rubyonrails.org/asset_pipeline.html#controller-specific-assets)
