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
    "user_id" : 1
    "user_name": "Han"
    "ImageUrl: "HantheGreat"
}
"""


class FriendList(db.Document):
    user_id = db.StringField()
    about_me = db.StringField()
    email = db.StringField()
    user_name = db.StringField()
    ImageUrl = db.StringField()
    LoginStatus = db.BooleanField()
    Monday = db.ListField()
    Tuesday = db.ListField()
    Wednesday = db.ListField()
    Thursday = db.ListField()
    Friday = db.ListField()
    Saturday = db.ListField()
    Sunday = db.ListField()
    Friendslist = db.ListField()
    FriendRequests = db.ListField()
    Match = db.DictField()
    Message = db.ListField()

    def to_json(self):
        """ Converts the document to JSON"""
        return{
            "user_id": self.user_id,
            "about_me": self.about_me,
            "email": self.email,
            "user_name": self.user_name,
            "ImageUrl": self.ImageUrl,
            "LoginStatus": self.LoginStatus,
            "Monday": self.Monday,
            "Tuesday": self.Tuesday,
            "Wednesday": self.Wednesday,
            "Thursday": self.Thursday,
            "Friday": self.Friday,
            "Saturday": self.Saturday,
            "Sunday": self.Sunday,
            "Friendslist": self.Friendslist,
            "FriendRequests": self.FriendRequests,
            "Match": self.Match,
            "Message": self.Message

        }

    @app.route('/api/allfriends/<user_id>', methods=['GET'])
    def api_allfriends(user_id):
        """ This API returns all the friends in the friend's list"""
        if request.method == "GET":
            content = request.json
            friend1 = FriendList.objects(user_id=user_id).first()
            friends = []
            if len(friend1.Friendslist) != 0:

                for friend in FriendList.objects:
                    if friend.user_id in friend1.Friendslist:
                        friends.append(friend)
                return (jsonify(friends), 200)
            # if len(friends) == 0:
            else:
                return(jsonify(friends), 200)
            # else:
            #     return (jsonify(friends), 200)

    @app.route('/api/message/<msg>,<friend_name>,<friend_id>,<user_id>', methods=['PUT'])
    def api_msg(msg, friend_name, friend_id, user_id):
        """
        api to send message
        friend_id --> person who sends the message
        user_id --> person to whom the message is sent to
        """
        if request.method == 'PUT':
            content = request.json
            friend_obj = FriendList.objects(user_id=user_id).first()
            friend_obj.update(add_to_set__Message=[[
                              friend_id, friend_name, msg]])

            return("Message Saved", 200)

    @app.route('/api/aboutme/<a>,<user_id>', methods=['PUT'])
    def aboutMe(a, user_id):
        """ This API rupdates the about me"""
        if request.method == "PUT":
            content = request.json
            friend1 = FriendList.objects(user_id=user_id).first()
            friend1.update(about_me=a)
            friend1.reload()
            return (jsonify(friend1.about_me), 200)

    @app.route('/api/match/<time>,<location>,<workout>,<user_id>', methods=['PUT'])
    def api_match(time, location, workout, user_id):
        """
        api to store match information and find the matches or store data if no match
        """
        if request.method == 'PUT':
            content = request.json
            friend_obj = FriendList.objects(user_id=user_id).first()
            friend_obj.update(Match={
                'Time': time,
                'Location': location,
                'workout': workout,
            })

            friend_obj.save()
            friend_obj.reload()
            friends = []
            friend_m = FriendList.objects(Match=friend_obj.Match)
            for friend in friend_m:
                # filter queries with match = that of friend.obj's match, so it will not waste time and then find the user details
                friends.append(friend)
                if friend_obj in friends:
                    friends.remove(friend_obj)

            if len(friends) == 0:
                return("Entry Saved", 200)
            else:

                return(jsonify(friends), 200)

    @app.route('/api/schedule/<user_id>', methods=['GET', 'PUT', 'DELETE'])
    def api_schedule(user_id):
        if request.method == 'PUT':
            content = request.json
            friend_obj = FriendList.objects(user_id=user_id).first()
            friend_obj.update(Monday=content['Monday'], Tuesday=content["Tuesday"], Wednesday=content["Wednesday"],
                              Thursday=content["Thursday"], Friday=content["Friday"], Saturday=content["Saturday"], Sunday=content["Sunday"])
            return make_response("Schedule Updated", 201)

    @app.route('/api/scheduleFriend/<friend_id>', methods=['GET'])
    def api_scheduleFriend(friend_id):
        """ API schedule to get the workout details of the friend """
        if request.method == 'GET':
            content = request.json
            friend_obj = FriendList.objects(user_id=friend_id).first()
            # friend_obj.g(Monday=content['Monday'], Tuesday=content["Tuesday"], Wednesday=content["Wednesday"], Thursday=content["Thursday"], Friday=content["Friday"], Saturday=content["Saturday"], Sunday=content["Sunday"])
            return make_response(jsonify(friend_obj.Monday, friend_obj.Tuesday, friend_obj.Wednesday, friend_obj.Thursday, friend_obj.Friday, friend_obj.Saturday, friend_obj.Sunday), 201)

    @app.route('/api/cancelrequest/<friend_id>,<user_id>', methods=['PUT'])
    def api_cancelrequest(friend_id, user_id):
        """
        api to cancel request
        <friend_id> -> revcieves the request
        <user_id> -> sends the request
        """
        if request.method == 'PUT':
            content = request.json
            friend_obj = FriendList.objects(user_id=friend_id).first()

            if user_id in friend_obj.FriendRequests:
                # user_id of the user who sends the request gets pushed to the friendrequests list of the friend_id
                friend_obj.update(pull__FriendRequests=user_id)
                friend_obj.reload()
                return make_response("Friend request removed", 200)

    @app.route('/api/sendrequest/<friend_id>,<user_id>', methods=['PUT'])
    def api_sendrequest(friend_id, user_id):
        """
        api to send request
        Updated to check if friend request already sent
        <friend_id> -> revcieves the request
        <user_id> -> sends the request
        """
        if request.method == 'PUT':
            content = request.json
            friend_obj = FriendList.objects(user_id=friend_id).first()

            if user_id not in friend_obj.FriendRequests and user_id not in friend_obj.Friendslist:
                # user_id of the user who sends the request gets pushed to the friendrequests list of the friend_id
                friend_obj.update(push__FriendRequests=user_id)
                friend_obj.reload()
                return make_response(jsonify(friend_obj.FriendRequests), 200)

            else:
                return make_response("User Already Sent Request or Is already a friend", 200)

    @app.route('/api/confirmrequest/<friend_id>,<user_id>', methods=['PUT'])
    def api_confirmrequest(friend_id, user_id):
        """
        API to confirm request
        updating the confirm request API -- deleting the user ID from friend requests once the user confirms the friend and If user already friends then cannot confirm request
        <friend_id> -> revcieves the request
        <user_id> -> sends the request
        """
        if request.method == 'PUT':
            content = request.json
            friend_obj = FriendList.objects(user_id=friend_id).first()
            if user_id not in friend_obj.Friendslist:
                friend_obj.update(push__Friendslist=user_id)
                friend_obj.update(pull__FriendRequests=user_id)
                friend_obj.reload()
                friend2 = FriendList.objects(user_id=user_id).first()
                friend2.update(push__Friendslist=friend_id)
                friend2.update(pull__FriendRequests=user_id)
                friend2.reload()
                return make_response(jsonify(friend_obj.Friendslist, friend2.Friendslist), 200)
            else:
                return make_response("User already in Friends list")

    @app.route('/api/removefriend/<friend_id>,<user_id>', methods=['PUT'])
    def api_removefriend(friend_id, user_id):
        """
        API to remove friend from friends list
        <friend_id> -> removes the friend
        """
        if request.method == 'PUT':
            content = request.json
            friend_obj = FriendList.objects(user_id=friend_id).first()
            if user_id in friend_obj.Friendslist:
                friend_obj.update(pull__Friendslist=user_id)
                friend_obj.reload()
                friend2 = FriendList.objects(user_id=user_id).first()
                friend2.update(pull__Friendslist=friend_id)
                friend2.reload()
                return make_response(jsonify(friend_obj.Friendslist, friend2.Friendslist), 200)
            else:
                return make_response("Users are not friends")

    @app.route('/api/db_populate', methods=['POST'])
    def db_populate():

        friend1 = FriendList(user_id='1', user_name="Steve", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend2 = FriendList(user_id='2', user_name="Elon",
                             ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend3 = FriendList(user_id='3', user_name="Tim", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend4 = FriendList(user_id='4', user_name="Arnold",
                             ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend5 = FriendList(user_id='5', user_name="Juggal", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend6 = FriendList(user_id='6', user_name="Tommy",
                             ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend7 = FriendList(user_id='7', user_name="Rimmy", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend30 = FriendList(user_id='8', user_name="Avi",
                              ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend8 = FriendList(user_id='9', user_name="Jeel", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend9 = FriendList(user_id='10', user_name="Vini",
                             ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend10 = FriendList(user_id='11', user_name="Paru", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend11 = FriendList(user_id='12', user_name="Vivek",
                              ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend12 = FriendList(user_id='13', user_name="", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend13 = FriendList(user_id='140', user_name="Vadivelu",
                              ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend14 = FriendList(user_id='150', user_name="Simbu", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend15 = FriendList(user_id='160', user_name="Panda",
                              ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend16 = FriendList(user_id='17', user_name="Indrayani", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend31 = FriendList(user_id='18', user_name="Yash",
                              ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend17 = FriendList(user_id='19', user_name="Rajnikanth", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend18 = FriendList(user_id='20', user_name="Pan",
                              ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend19 = FriendList(user_id='21', user_name="Ajith", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend20 = FriendList(user_id='22', user_name="Pan",
                              ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend21 = FriendList(user_id='23', user_name="Tim", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend22 = FriendList(user_id='24', user_name="Pan",
                              ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend23 = FriendList(user_id='25', user_name="Vijay", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend24 = FriendList(user_id='26', user_name="Pan",
                              ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend25 = FriendList(user_id='27', user_name="Jackie", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend26 = FriendList(user_id='28', user_name="Pan",
                              ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend27 = FriendList(user_id='29', user_name="Jet Li", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend28 = FriendList(user_id='30', user_name="Pan",
                              ImageUrl="HantheGreat", Monday=[], Tuesday=[], Friday=[])
        friend29 = FriendList(user_id='31', user_name="Timothy", ImageUrl="TimtheGreat", Monday=[
        ], Tuesday=[], Wednesday=[], Thursday=[])
        friend1.save()
        friend2.save()
        friend3.save()
        friend4.save()
        friend5.save()
        friend6.save()
        friend7.save()
        friend8.save()
        friend9.save()
        friend10.save()
        friend11.save()
        friend12.save()
        friend13.save()
        # friend14.save()
        # friend15.save()
        # friend16.save()
        friend17.save()
        friend18.save()
        friend19.save()
        friend20.save()
        friend21.save()
        friend22.save()
        friend23.save()
        friend24.save()
        friend25.save()
        friend26.save()
        friend27.save()
        friend28.save()
        friend29.save()
        friend30.save()
        friend31.save()

        return make_response("", 201)

    @app.route('/api/friends', methods=['GET', 'POST'])
    def api_friends():
        if request.method == "GET":
            friends = []
            for friend in FriendList.objects:
                friends.append(friend)
            return make_response(jsonify(friends), 200)
        elif request.method == 'POST':
            content = request.json
            friend = FriendList(user_id=content['user_id'],
                                user_name=content['user_name'], email=content['email'], about_me=" ",
                                ImageUrl=content['ImageUrl'], LoginStatus=True, Monday=[], Tuesday=[], Wednesday=[], Thursday=[], Friday=[], Saturday=[], Sunday=[])
            friend.save()
            if friend:
                return make_response("Successfully post a user", 201)
            else:
                return make_response(False, 400)

    @app.route('/api/login/<user_id>', methods=['PUT'])
    def api_lstatus(user_id):
        if request.method == 'PUT':
            friends = []
            for friend in FriendList.objects:
                friends.append(friend)
            friend_obj = FriendList.objects(user_id=str(user_id)).first()
            if friend_obj in friends:
                friend_obj.update(LoginStatus=True)
                return make_response("User Logged In", 200)
            else:
                return make_response("User not registered", 400)

    @app.route('/api/logout/<user_id>', methods=['PUT'])
    def api_status(user_id):
        if request.method == 'PUT':
            friends = []
            for friend in FriendList.objects:
                friends.append(friend)
            friend_obj = FriendList.objects(user_id=str(user_id)).first()
            if friend_obj in friends:
                friend_obj.update(LoginStatus=False)
                return make_response("User Logged Out", 200)

    @app.route('/api/friendlist/<user_id>', methods=['GET', 'PUT', 'DELETE'])
    def api_each_friend(user_id):
        if request.method == 'GET':
            friends = []
            for friend in FriendList.objects:
                friends.append(friend)
            friend_obj = FriendList.objects(user_id=str(user_id)).first()
            if friend_obj in friends:
                return make_response(jsonify(friend_obj.to_json()), 200)
            else:
                return make_response("Id not present", 400)
        elif request.method == 'PUT':
            content = request.json
            friend_obj = FriendList.objects(user_id=user_id).first()
            friend_obj.update(
                user_name=content['user_name'], ImageUrl=content['ImageUrl'])
            return make_response("", 204)
        elif request.method == 'DELETE':
            friend_obj = FriendList.objects(user_id=user_id).first()
            friend_obj.delete()
            return make_response("Deleted", 204)


if __name__ == '__main__':
    app.run()
