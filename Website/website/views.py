from flask import Blueprint, render_template

views = Blueprint('views', __name__)


@views.route('/')
def home():

    return render_template("index.html")


@views.route('/leadership')
def leadership():

    return render_template("/leadership/index.html")


@views.route('/plainsboro')
def plainsboro():

    return render_template("/plainsboro/index.html")


@views.route('/trenton')
def trenton():

    return render_template("/trenton/index.html")
