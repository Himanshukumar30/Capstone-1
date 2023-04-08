from database import db
from models.recipe import Recipe


class MealPlan(db.Model):
    '''Model for meal plan table'''
    
    __tablename__ = 'meal_plans'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipes.id'), nullable=False)

    # Define one-to-many relationship between meal plans and recipes
    recipe = db.relationship('Recipe', backref='meal_plans')

    def __repr__(self):
        return f'<MealPlan {self.name}>'