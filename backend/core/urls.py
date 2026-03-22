from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),

    # Signage APIs
    path(
        "api/signage/",
        include(("apps.signage.urls", "signage"), namespace="signage"),
    ),

    # Document APIs
    path(
        "api/documents/",
        include(("apps.documents.urls", "documents"), namespace="documents"),
    ),
]