from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),

    # Signage APIs (includes requirement document uploads)
    path(
        "api/signage/",
        include(("apps.signage.urls", "signage"), namespace="signage"),
    ),
]