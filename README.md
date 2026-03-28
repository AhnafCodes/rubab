Rubab is a simpler way to use React, Vue, or any frontend JS framework with Django — a straightforward integration without a separate Node dev server.

The idea is to leverage Django's templating, routing, and app-based structure, rather than reducing Django to just an API backend. Some of the choices below may feel counter-intuitive but are deliberate.

## How it works

**1. No separate JS dev server**
JS is built with Webpack and served as static files by Django. No `npm run dev` proxy, no CORS config.
> Note: live-reloading is not included. Run `npm run build-dev` in watch mode as an alternative.

**2. Per-app JS bundles, not one giant bundle**
Django already has the concept of apps. Each app gets its own compiled JS file. React (or Vue) is extracted into a single shared bundle cached across all app navigations. No upfront code-splitting decisions needed.

**3. What each page loads**
- 1 HTML template
- 1 app JS bundle (e.g. `demos.gen.js`)
- 1 shared React/Vue bundle (`react.gen.js`) — browser-cached across pages
- 1–2 CSS files (Tailwind or Sass)
- 1 vendor/shared JS (optional)

That's 4–7 files per page. More predictable and maintainable than a single large bundle, and different files can be loaded per template based on role or authentication state.

**4. Passing server-side data to JavaScript**
Initial data (non-sensitive metadata) is passed from Django views to JS using Django's built-in `json_script` filter — no custom template tags or `mark_safe` hacks needed.

In the view:
```python
def my_view(request):
    context = {'my_data': {'name': 'Django', 'version': '5.0'}}
    return render(request, 'my_template.html', context)
```

In the template:
```html
{{ my_data|json_script:"my-data" }}
```

Django renders this as a safely escaped JSON script tag:
```html
<script id="my-data" type="application/json">{"name": "Django", "version": "5.0"}</script>
```

In JavaScript:
```javascript
const myData = JSON.parse(document.getElementById("my-data").textContent);
```

This approach is XSS-safe — Django escapes `<`, `>`, `&`, and quotes inside the JSON automatically.

## Getting started

Create and activate a virtual environment, then install Python dependencies:
```
pip install -r requirement.txt
```

Generate a `SECRET_KEY` and add it to `settings.py`:
```python
from django.core.management.utils import get_random_secret_key
print(get_random_secret_key())
```

Install JS dependencies:
```
npm install
```

Run Django:
```
python manage.py runserver
```

In a second terminal, build and watch JS:
```
npm run build-dev
```

In a third terminal, build CSS:
```
npm run build-css
```

Visit `http://localhost:8000/demos/demo1/` to see a working example.
