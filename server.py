from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/game')
def game():
    image_name = request.args.get('name')
    if image_name == "van":
        image_set = {
            'static/images/van/Capture1.JPG',
            'static/images/van/Capture2.JPG',
            'static/images/van/Capture3.JPG',
            'static/images/van/Capture4.JPG',
            'static/images/van/Capture5.JPG',
            'static/images/van/Capture6.JPG',
            'static/images/van/Capture7.JPG',
            'static/images/van/Capture8.JPG',
            'static/images/van/Capture9.JPG'
        }

    elif image_name == "motor":
        image_set = {
            'static/images/motor/Capture1.JPG',
            'static/images/motor/Capture2.JPG',
            'static/images/motor/Capture3.JPG',
            'static/images/motor/Capture4.JPG',
            'static/images/motor/Capture5.JPG',
            'static/images/motor/Capture6.JPG',
            'static/images/motor/Capture7.JPG',
            'static/images/motor/Capture8.JPG',
            'static/images/motor/Capture9.JPG',
        }
    return render_template("game.html", row_num=3, col_num=3, image_set=image_set)


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True
    )
