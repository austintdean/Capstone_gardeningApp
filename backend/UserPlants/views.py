from multiprocessing.spawn import prepare
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import UserPlants
from .serializers import UserPlantsSerializer
from .models import Plant
from plants.serializers import PlantSerializer 
# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_plants(request):
    plants = Plant.objects.all()
    serializer = PlantSerializer(plants, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def spring_plants(request):
    plants = Plant.objects.filter(season= "Spring" )
    serializer = PlantSerializer(plants, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def summer_plants(request):
    plants = Plant.objects.filter(season= "Summer" )
    serializer = PlantSerializer(plants, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def fall_plants(request):
    plants = Plant.objects.filter(season= "Fall" )
    serializer = PlantSerializer(plants, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def winter_plants(request):
    plants = Plant.objects.filter(season = "Winter" )
    serializer = PlantSerializer(plants, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_plants(request):
    if request.method == 'POST':
        serializer = UserPlantsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        cars = UserPlants.objects.filter(user_id=request.user.id)
        serializer = UserPlantsSerializer(cars, many=True)
        return Response(serializer.data)
    
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_plant(request):
        if request.method == 'DELETE':
            UserPlants.delete()
            return Response(status.HTTP_204_NO_CONTENT)


    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def delete_plant(request):
        if request.method == 'DELETE':
            UserPlants.delete()
            return Response(status.HTTP_204_NO_CONTENT)


