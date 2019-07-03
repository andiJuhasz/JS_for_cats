from flask import Flask, render_template

app = Flask(__name__)

"""
@app.route('/')
def index():
    return render_template("index.html")
"""


@app.route('/')
def game():
    return render_template("game.html", row_num=3, col_num=3)


if __name__ == '__main__':
    app.run(
        debug=True
    )
