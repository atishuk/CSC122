from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy 
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///shopping_list.db'
db = SQLAlchemy(app)

class Shop_list(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product = db.Column(db.String(100), nullable=False)
    quantity = db.Column(db.String(50), nullable=False)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)

def __repr__(self):
    return '<Shopping_item %r>' %self.id

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        new_product = request.form['new_product']
        new_product_quantity = request.form['new_product_quantity']
        add_product = Shop_list(product = new_product, quantity = new_product_quantity)

        try:
            db.session.add(add_product)
            db.session.commit()
            return redirect('/')
        except:
            return 'Problem with adding this product'

    else:
        products = Shop_list.query.order_by(Shop_list.product).all()
        return render_template('index.html', products = products)

@app.route('/delete/<int:id>')
def delete(id):
    product_to_delete = Shop_list.query.get_or_404(id)

    try:
        db.session.delete(product_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return 'There is a problem to delete that product'


@app.route('/updatequantity/<int:id>', methods=['GET', 'POST'])
def updatequantity(id):
    prod = Shop_list.query.get_or_404(id)

    if request.method == 'POST':
        prod.quantity = request.form['update_product_quantity']

        try:
            db.session.commit()
            return redirect('/')
        except:
            return 'There was an issue updating that product quantity'

    else:
        return render_template('index.html', prod = prod)


@app.route('/updatename/<int:id>', methods=['GET', 'POST'])
def updatename(id):
    prod = Shop_list.query.get_or_404(id)

    if request.method == 'POST':
        prod.product = request.form['update_product_name']

        try:
            db.session.commit()
            return redirect('/')
        except:
            return 'There was an issue updating that product name'

    else:
        return render_template('index.html', prod = prod)


if __name__ == "__main__":
    app.run(debug=True)
