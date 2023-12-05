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


@views.route('/cpl')
def cranbury():

    return render_template("/cpl/index.html")

@views.route('/hhc')
def howard():

    return render_template("/hhc/index.html")

@views.route('/ppl')
def plainsboro():

    return render_template("/ppl/index.html")

@views.route('/wwl')
def windsor():

    return render_template("/wwl/index.html")
