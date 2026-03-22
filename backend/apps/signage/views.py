from rest_framework import viewsets
from rest_framework.parsers import FormParser, MultiPartParser

from .models import Document, SignageCategory
from .serializers import DocumentSerializer, SignageCategorySerializer


class SignageCategoryViewSet(viewsets.ModelViewSet):
    queryset = SignageCategory.objects.all()
    serializer_class = SignageCategorySerializer


class DocumentViewSet(viewsets.ModelViewSet):
    """Uploads and CRUD for files under a requirement — nested under /api/signage/."""

    serializer_class = DocumentSerializer
    parser_classes = [MultiPartParser, FormParser]

    def get_queryset(self):
        return Document.objects.filter(requirement_id=self.kwargs["requirement_pk"])

    def perform_create(self, serializer):
        serializer.save(
            requirement_id=self.kwargs["requirement_pk"],
            uploaded_by=self.request.data.get("uploaded_by", "anonymous"),
        )
