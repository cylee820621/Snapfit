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
    
class Schedule(db.Document):
    day = db.StringField()
    workout_type =db.StringField() #beginner, intermediate, killer
    body_part = db.StringField() #upper, lower
    exercise1 = db.StringField() 
    exercise2 = db.StringField()
    exercise3 = db.StringField()
    sets = db.IntField()
    reps = db.IntField()
        

    def to_jsonnn(self):
        """ Converts the document to JSON"""
        return{
            "day" : self.day,
            "workout_type" : self.workout_type, #beginner, intermediate, killer
            "body_part" : self.body_part, #upper, lower
            "exercise1" : self.exercise1, 
            "exercise2" : self.exercise2,
            "exercise3" : self.exercise3,
            "sets" : self.set,
            "reps" : self.reps

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
            
    @app.route('/api/dbPopulate', methods=['POST'])
    def dbPopulate():
        schedule1 = Schedule(day ='Monday', workout_type = 'Beginner', body_part = 'Upper', exercise1 = 'Push up', exercise2 = 'Bench Press', exercise3 = 'bicep and tricep dumbbell curls', sets = 3, reps = 20)
        schedule2 = Schedule(day ='Tuesday', workout_type = 'Beginner', body_part = 'lower', exercise1 = 'Squats', exercise2 = 'Sumo Squats', exercise3 = 'lunges', sets = 3, reps = 20)
        schedule3 = Schedule(day ='Wednesday', workout_type = 'Beginner', body_part = 'Upper', exercise1 = 'Push up', exercise2 = 'Bench Press', exercise3 = 'bicep and tricep dumbbell curls', sets = 3, reps = 20)
        schedule4 = Schedule(day ='Thursday', workout_type = 'Beginner', body_part = 'lower', exercise1 = 'Squats', exercise2 = 'Sumo Squats', exercise3 = 'lunges', sets = 3, reps = 20)
        schedule5 = Schedule(day ='Friday', workout_type = 'Beginner', body_part = 'Upper', exercise1 = 'Push up', exercise2 = 'Bench Press', exercise3 = 'bicep and tricep dumbbell curls', sets = 3, reps = 20)
        schedule1.save()
        schedule2.save()
        schedule3.save()
        schedule4.save()
        schedule5.save()
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
