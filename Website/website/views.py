from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():

    return render_template("index.html")

@views.route('/leadership')
def leadership():

    return render_template("/leadership/index.html")
