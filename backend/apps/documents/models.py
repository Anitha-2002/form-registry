from django.db import models
from shared.models.base_model import BaseModel
from apps.signage.models import Requirement


class Document(BaseModel):
    requirement = models.ForeignKey(
        Requirement,
        on_delete=models.CASCADE,
        related_name="documents"
    )
    file = models.FileField(upload_to="uploads/")
    uploaded_by = models.CharField(max_length=255)  # later link user