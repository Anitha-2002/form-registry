from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import DocumentViewSet, SignageCategoryViewSet

app_name = "signage"

router = DefaultRouter()
router.register(r"", SignageCategoryViewSet, basename="signage")

urlpatterns = [
    path(
        "requirements/<int:requirement_pk>/documents/",
        DocumentViewSet.as_view({"get": "list", "post": "create"}),
        name="requirement-documents-list",
    ),
    path(
        "requirements/<int:requirement_pk>/documents/<int:pk>/",
        DocumentViewSet.as_view(
            {
                "get": "retrieve",
                "put": "update",
                "patch": "partial_update",
                "delete": "destroy",
            }
        ),
        name="requirement-documents-detail",
    ),
] + router.urls
