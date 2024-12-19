from django.shortcuts import render, redirect
from django.contrib.auth import logout

# Home page view
def home(request):
    return render(request, "home.html")

# Logout view
def logout_view(request):
    logout(request)
    return redirect("/")  # Redirect to the root after logout
