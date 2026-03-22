from rest_framework import serializers
from .models import SignageCategory, RequirementGroup, Requirement


class RequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requirement
        fields = "__all__"


class RequirementGroupSerializer(serializers.ModelSerializer):
    requirements = RequirementSerializer(many=True, read_only=True)

    class Meta:
        model = RequirementGroup
        fields = "__all__"


class SignageCategorySerializer(serializers.ModelSerializer):
    requirement_groups = RequirementGroupSerializer(many=True, read_only=True)

    class Meta:
        model = SignageCategory
        fields = "__all__"