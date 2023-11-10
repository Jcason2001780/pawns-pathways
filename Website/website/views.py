from flask import Blueprint, render_template

views = Blueprint('views', __name__)


@views.route('/')
def home():

    return render_template("index.html")


@views.route('/leadership')
def leadership():

    return render_template("/leadership/index.html")


@views.route('/blog')
def blog():

    return render_template("/blog/index.html")


@views.route('/coverage')
def coverage():

    return render_template("/coverage/index.html")


@views.route('/curriculum')
def curriculum():

    return render_template("/curriculum/index.html")


@views.route('/classes')
def classes():

    return render_template("/classes/index.html")


@views.route('/events')
def events():

    return render_template("/events/index.html")


@views.route('/analysis')
def analysis():

    return render_template("/analysis/index.html")


@views.route('/plainsboro')
def plainsboro():

    return render_template("/plainsboro/index.html")


@views.route('/trenton')
def trenton():

    return render_template("/trenton/index.html")


@views.route('/hamilton')
def hamilton():

    return render_template("/hamilton/index.html")


@views.route('/princeton')
def princeton():

    return render_template("/princeton/index.html")


@views.route('/franklin')
def franklin():

    return render_template("/franklin/index.html")


@views.route('/cranbury')
def cranbury():

    return render_template("/cranbury/index.html")


@views.route('/brunswick')
def brunswick():

    return render_template("/brunswick/index.html")


@views.route('/windsor')
def windsor():

    return render_template("/windsor/index.html")