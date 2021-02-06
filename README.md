Rubab is a simpler alternative to SPA using React or Vue or Svelte with Django. 

Idea is to leverage Django templating, routing and existing app(s) based structure. This way, we can better uses Django's feaures rather than just using parts of it like DRF. 
Some of the ideas below might feel counter initutive but are actually reasonable and might be the better choices.
watch : https://www.youtube.com/watch?v=rvoZKQn2Go8

1. No need to run seperate server for Js(even during development).
   - live reloading over-hipped. And perhaps can be achieved with django too.
2. No need bundle all Js in huge bundle and pore much thought on code splitting.
   - Django already has concept of app, so on similar line we can have generate(using snowpack/weback) 1 Js for an app. If needed an may can have 2-3 Js generated files
3. Each Django tempalte/route loads following files(different set files based on roles/authentication):
    1. 1 html /loading template
    2. 1 Js  genetated for the app 
    3. 1 Js for React/Vue shared cross apps of the project, so that cached copy is used on navigating to a different app/route.
    4. 1-2 CSS, Tailwind CSS or Sass can be used
    5. 1 vendor/shared JS (optional)
    
    So 4-7 files, its not bad. Actually it might be more performant, responsive and maintainable than loading gaint BLOB with Js, CSS...
   
4. Handling initial load of data/metadata(not private/user sensitive data) without api/service call.
   This is done using templatetags, this feel weird even ugly.
   
