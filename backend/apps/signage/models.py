from django.db import models
from shared.models.base_model import BaseModel


class SignageCategory(BaseModel):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class RequirementGroup(BaseModel):
    signage_category = models.ForeignKey(
        SignageCategory,
        on_delete=models.CASCADE,
        related_name="requirement_groups"
    )
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Requirement(BaseModel):
    group = models.ForeignKey(
        RequirementGroup,
        on_delete=models.CASCADE,
        related_name="requirements"
    )
    name = models.CharField(max_length=255)
    is_mandatory = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Document(BaseModel):
    """File uploaded against a signage requirement (lives in signage app, not a separate API)."""

    requirement = models.ForeignKey(
        Requirement,
        on_delete=models.CASCADE,
        related_name="documents",
    )
    file = models.FileField(upload_to="uploads/")
    uploaded_by = models.CharField(max_length=255)  # later: FK to user

    def __str__(self):
        return f"{self.requirement_id}: {self.file.name}"