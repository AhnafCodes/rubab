from django.shortcuts import render


# Create your views here.
def demo_1(request):
    context = {'healthy_instructions': [
      "Start your day with a glass of water(or lemon water)",
      "Exercise",
      "Eat a good breakfast",
      "Stay hydrated and have a fruit/snack",
      "Eat a healthy Lunch",
      "Take break for 10 minute afternoon walk",
      "Have short Dinner",
      "Head to bed early",
      "Have 6 to 10 hr of relaxed sleep"
    ]};
    return render(request, 'demos/index.html', context)
