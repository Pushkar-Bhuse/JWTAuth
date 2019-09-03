from authenticate_app.serializers import UserSerializer


def my_jwt_response_handler(token, user=None, request=None):
    # print("In Django")
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }