from flask import Flask, make_response, request, jsonify
from flask_mongoengine import MongoEngine
import urllib
import ssl




app = Flask(__name__)


database_name = "API"
DB_URI = "mongodb+srv://Adi:sitsit@pythoncluster.hte9p.azure.mongodb.net/API?retryWrites=true&w=majority&ssl_cert_reqs=CERT_NONE"
app.config["MONGODB_HOST"] = DB_URI




db = MongoEngine()
db.init_app(app)

"""
Sample Request Body
{
    "friend_id" : 1
    "friend_name": "Han"
    "user_name": "HantheGreat"
}
"""
class FriendList(db.Document):
    friend_id = db.IntField()
    friend_name = db.StringField()
    user_name = db.StringField()

    def to_json(self):
        """ Converts the document to JSON"""
        return{
            "friend_id" : self.friend_id,
            "friend_name" : self.friend_name,
            "user_name" : self.user_name

        }

    @app.route('/api/db_populate', methods=['POST'])
    def db_populate():
        friend1 = FriendList(friend_id=1, friend_name="Han", user_name="HantheGreat")
        friend2 = FriendList(friend_id=2, friend_name="Ban", user_name="BantheGreat")
        friend3 = FriendList(friend_id=3, friend_name="Jan", user_name="JantheGreat")
        friend1.save()
        friend2.save()
        friend3.save()
        return make_response("",201)

    @app.route('/api/friends', methods=['GET', 'POST'])
    def api_friends():
        if request.method == "GET":
            friends = []
            for friend in FriendList.objects:
                friends.append(friend)
            return make_response(jsonify(friends), 200)
        elif request.method == 'POST':
            content = request.json
            friend = FriendList(friend_id=content['friend_id'],
             friend_name=content['friend_name'],
             user_name=content['user_name'])
            friend.save()
            return make_response("", 201)

    @app.route('/api/friendlist/<friend_id>', methods=['GET', 'PUT', 'DELETE'])
    def api_each_friend(friend_id):
        if request.method == 'GET':
            friend_obj = FriendList.objects(friend_id= friend_id).first()
            if friend_obj:
                return make_response(jsonify(friend_obj.to_json()), 200)
            else:
                make_response("",400)
        elif request.method == 'PUT':
            content = request.json
            friend_obj = FriendList.objects(friend_id=friend_id).first()
            friend_obj.update(friend_name=content['friend_name'], user_name=content['user_name'])
            return make_response("",204)
        elif request.method == 'DELETE':
            friend_obj = FriendList.objects(friend_id=friend_id).first()
            friend_obj.delete()
            return make_response("",204)
            
   
    

if __name__ == '__main__':
    app.run()