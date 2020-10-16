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
    "ImageUrl: "HantheGreat"
}
"""
class FriendList(db.Document):
    friend_id = db.StringField()
    friend_name = db.StringField()
    ImageUrl = db.StringField()
    LoginStatus = db.BooleanField()

    def to_json(self):
        """ Converts the document to JSON"""
        return{
            "friend_id" : self.friend_id,
            "friend_name" : self.friend_name,
            "ImageUrl" : self.ImageUrl,
            "LoginStatus": self.LoginStatus
        }
    
class Schedule(db.Document):
    day = db.StringField()
    exercise = db.ListField() #make it a list
  
        

    def to_jsonnn(self):
        """ Converts the document to JSON"""
        return{
            "day" : self.day,
            "exercise" : self.exercise

        }

    @app.route('/api/db_populate', methods=['POST'])
    def db_populate():
        friend1 = FriendList(friend_id=1, friend_name="Han", ImageUrl="HantheGreat")
        friend1.save()
       
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
             ImageUrl=content['ImageUrl'])
            friend.save()
            if friend:
                return make_response("Successfully post a user", 201)
            else:
                return make_response(False, 400)
                
    @app.route('/api/login/<friend_id>', methods=['PUT'])
    def api_lstatus():
        if request.method == 'PUT':
            content = request.json
            friend_obj = FriendList.objects(friend_id=friend_id).first()
            friend_obj.update(LoginStatus=True)
            return make_response(" User logged in",200)         

    @app.route('/api/logout/<friend_id>', methods=['PUT'])
    def api_status():
        if request.method == 'PUT':
            content = request.json
            friend_obj = FriendList.objects(friend_id=friend_id).first()
            friend_obj.update(LoginStatus=False)
            return make_response(" User logged out",200) 

    @app.route('/api/friendlist/<friend_id>', methods=['GET', 'PUT', 'DELETE'])
    def api_each_friend(friend_id):
        if request.method == 'GET':
            friend_obj = FriendList.objects(friend_id= str(friend_id)).first()
            if friend_obj:
                return make_response(jsonify(friend_obj.to_json()), 200)
            else:
                make_response("Unable to find friend",400)
        elif request.method == 'PUT':
            content = request.json
            friend_obj = FriendList.objects(friend_id=friend_id).first()
            friend_obj.update(friend_name=content['friend_name'], ImageUrl=content['user_name'])
            return make_response("",204)
        elif request.method == 'DELETE':
            friend_obj = FriendList.objects(friend_id=friend_id).first()
            friend_obj.delete()
            return make_response("Deleted",204)
            
    @app.route('/api/dbPopulate', methods=['POST'])
    def dbPopulate():
        schedule1 = Schedule(day ='Monday', exercise = ['4 sets Triceps PushDown Arms Upper'])
        schedule2 = Schedule(day ='Tuesday', exercise = ['4 sets squats lunges lower'])
        schedule1.save()
        schedule2.save()
        return make_response("",201)

    @app.route('/api/schedule', methods=['GET', 'POST'])
    def api_schedule():
        if request.method == "GET":
            s = []
            for sch in Schedule.objects:
                s.append(sch)
            return make_response(jsonify(s), 200)
        elif request.method == 'POST':
            content = request.json
            schedule = Schedule(day = content["day"], workout_type = content["workout_type"], body_part = content["body_part"], exercise1 = content["exercise1"], exercise2 = content["exercise2"], exercise3 = content["exercise3"], set = content["sets"],reps = content["reps"])
            schedule.save()
            return make_response("", 201)

    @app.route('/api/schedule/<day>', methods=['GET', 'PUT', 'DELETE'])
    def api_sch(day):
        if request.method == 'GET':
            sch_obj = Schedule.objects(day= day).first()
            if sch_obj:
                return make_response(jsonify(sch_obj.to_jsonnn()), 200)
            else:
                make_response("",400)
        elif request.method == 'PUT':
            content = request.json
            sch_obj = Schedule.objects(day= day).first()
            sch_obj.update(workout_type = content["workout_type"], body_part = content["body_part"], exercise1 = content["exercise1"], exercise2 = content["exercise2"], exercise3 = content["exercise3"], set = content["sets"],reps = content["reps"])
            return make_response("",204)
        elif request.method == 'DELETE':
            sch_obj = Schedule.objects(day=day).first()
            sch_obj.delete()
            return make_response("",204)
    
    

if __name__ == '__main__':
    app.run()