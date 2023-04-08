from database import db
from models.ingredient import Ingredient

class Recipe(db.Model):
    '''Model for Recipes table'''
    
    __tablename__ = 'recipes'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    instructions = db.Column(db.Text, nullable=False)
    ingredient_id = db.Column(db.Integer, db.ForeignKey('ingredients.id'), nullable=False)

    # Define one-to-many relationship between ingredients and recipes
    ingredient = db.relationship('Ingredient', backref='recipes')

    def __repr__(self):
        return f'<Recipe {self.name}>'