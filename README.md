Rubab is a simpler way for using React or Vue or any frontend-js framework with Django. 

Idea is to leverage Django templating, routing and existing app(s) based structure. This way, we can better use Django's features rather than just using it for DRF and few other features. 
Some ideas below might feel counter-intuitive but are actually reasonable and might be the better choices.


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
   


To Run: 
create a virtual environment and then run 
```commandline
pip install -r requirement.txt
```
create "SECRET_KEY" to add it to settings.py using python/django shell

```python
from django.core.management.utils import get_random_secret_key

print(get_random_secret_key())
```

Install node_modules for Js
```commandline
npm install
```
Run Django
```commandline
python manage.py runserver
```

Open another terminal to build and watch Js(you are not running another for Js/statics)
```commandline 
npm run build-dev
```

Open another terminal to  build css (you are not running another for Js/statics)
```commandline
npm run build-css
```
Please check 
http://localhost:8000/demos/demo1/ for simple example 