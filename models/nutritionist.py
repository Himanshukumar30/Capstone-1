from database import db
from models.mealplan import MealPlan
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()


class Nutritionist(db.Model):
    '''Model for Nutritionist table'''
    
    __tablename__ = 'nutritionists'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.Text, nullable=False, unique=True)
    first_name = db.Column(db.Text, nullable=False)
    last_name = db.Column(db.Text, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    
    # Define one-to-many relationship between user and meal plans
    meal_plan = db.relationship('MealPlan', backref='users')
    
    # Define one-to-many relationship between user and recipes
    recipes = db.relationship('Recipe', backref='users')

    def __repr__(self):
        return f'<User {self.email}>'
    
    
    
    @classmethod
    def register(cls, username, email, first_name, last_name, pwd):
        """Register user with hashed password & return user."""

        hashed = bcrypt.generate_password_hash(pwd)
        # turn bytestring into normal (unicode utf8) string
        hashed_utf8 = hashed.decode("utf8")

        # return instance of user w/username and hashed pwd
        return cls(username=username, email=email, first_name=first_name, last_name=last_name, password=hashed_utf8)
    
    @classmethod
    def authenticate(cls, username, pwd):
        '''Authenticate user with username and password and return user'''
        
        user = Nutritionist.query.filter_by(username = username).first()
        if user and bcrypt.check_password_hash(user.password, pwd):
            return user
        else:
            return False
