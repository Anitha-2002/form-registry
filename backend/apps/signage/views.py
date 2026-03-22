from rest_framework import viewsets
from .models import SignageCategory
from .serializers import SignageCategorySerializer


class SignageCategoryViewSet(viewsets.ModelViewSet):
    queryset = SignageCategory.objects.all()
    serializer_class = SignageCategorySerializer