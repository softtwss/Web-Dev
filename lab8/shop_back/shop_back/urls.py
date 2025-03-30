
# from django.contrib import admin
# from django.urls import path, include

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/', include('api.urls')),

# ]
from django.contrib import admin
from django.urls import path, include
from api.views import home  

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  
    path('', home),  
]

