from database import db

class Ingredient(db.Model):
    '''Model for ingredients table '''
    
    __tablename__ = 'ingredients'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)

    def __repr__(self):
        return f'<Ingredient {self.name}>'