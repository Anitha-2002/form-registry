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