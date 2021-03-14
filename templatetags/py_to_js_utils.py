from django.utils.safestring import mark_safe
from django.template import Library
import json
register = Library()


@register.filter(name='js_obj')
def js_obj(obj):
    return mark_safe(json.dumps(obj))

# you might need similar methods
@register.filter(name='de_quot')
def de_quot(string):
    return mark_safe(string)