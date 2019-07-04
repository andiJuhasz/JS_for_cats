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
        'static/images/van/Capture1.JPG',
        'static/images/van/Capture2.JPG',
        'static/images/van/Capture3.JPG',
        'static/images/van/Capture4.JPG',
        'static/images/van/Capture5.JPG',
        'static/images/van/Capture6.JPG',
        'static/images/van/Capture7.JPG',
        'static/images/van/Capture8.JPG',
        'static/images/van/Capture9.JPG'
    ]
    return render_template("game.html", row_num=3, col_num=3, image_list=image_list)


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True
    )
