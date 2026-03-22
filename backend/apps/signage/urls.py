from rest_framework.routers import DefaultRouter
from .views import SignageCategoryViewSet

app_name = "signage"  

router = DefaultRouter()
router.register(r"", SignageCategoryViewSet, basename="signage")

urlpatterns = router.urls