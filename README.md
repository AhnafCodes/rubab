Rubab is a simpler way for using React or Vue or any frontend-js framework with Django. 

Idea is to leverage Django templating, routing and existing app(s) based structure. This way, we can better uses Django's features rather than just for a plugin, DRF and few other features. 
Some ideas below might feel counter-intuitive but are actually reasonable and might be the better choices.
watch : https://www.youtube.com/watch?v=rvoZKQn2Go8

1. No need to run separate server for Js(even during development).
   - live reloading over-hipped. And perhaps can be achieved with django too.
2. No need bundle all Js in a huge bundle and pore much thought on code splitting.
   - Django already has concept of app, so on similar line we can have generated(using snowpack/webpack) 1 Js for an app. If needed we can have 2-3 Js generated files
3. Each Django template/route loads following files(different set files based on roles/authentication):
    1. 1 html /loading template
    2. 1 Js  generated for the app 
    3. 1 Js for React/Vue shared cross apps of the project, so that cached copy is used on navigating to a different app/route.
    4. 1-2 CSS, Tailwind CSS or Sass can be used
    5. 1 vendor/shared JS (optional)
    
    So 4-7 files per app/page, it's not bad. Actually it might be more performant, responsive and maintainable than loading giant BLOB with Js, CSS...
   
4. Handling initial load of data/metadata(not private/user sensitive data) without api/service call.
   This is done using templatetags, this feel weird even ugly.
   
