from flask import Flask, render_template

app = Flask(__name__)

"""
@app.route('/')
def index():
    return render_template("index.html")
"""


@app.route('/')
def game():
    image_list = [
        'static/images/Screenshot from 2019-03-05 13-28-02.png',
        'static/images/Screenshot from 2019-03-22 16-46-36.png',
        'static/images/Screenshot from 2019-03-22 16-47-29.png',
        'static/images/Screenshot from 2019-03-22 16-51-46.png',
        'static/images/Screenshot from 2019-03-22 17-09-11.png',
        'static/images/Screenshot from 2019-04-02 17-10-34.png',
        'static/images/Screenshot from 2019-04-02 17-31-24.png',
        'static/images/Screenshot from 2019-04-02 17-34-26.png',
        'static/images/Screenshot from 2019-04-03 22-20-38.png'
    ]
    return render_template("game.html", row_num=3, col_num=3, image_list=image_list)


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True
    )
