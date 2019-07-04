from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/game')
def game():
    image_name = request.args.get('name')
    row_num = 0
    col_num = 0
    if image_name == "van":
        row_num = 3
        col_num = 3
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
        row_num = 4
        col_num = 4
        image_set = {
            'static/images/motor/image_part_001.png',
            'static/images/motor/image_part_002.png',
            'static/images/motor/image_part_003.png',
            'static/images/motor/image_part_004.png',
            'static/images/motor/image_part_005.png',
            'static/images/motor/image_part_006.png',
            'static/images/motor/image_part_007.png',
            'static/images/motor/image_part_008.png',
            'static/images/motor/image_part_009.png',
            'static/images/motor/image_part_010.png',
            'static/images/motor/image_part_011.png',
            'static/images/motor/image_part_012.png',
            'static/images/motor/image_part_013.png',
            'static/images/motor/image_part_014.png',
            'static/images/motor/image_part_015.png',
            'static/images/motor/image_part_016.png'
        }
    return render_template("game.html",
                           row_num=row_num,
                           col_num=col_num,
                           image_set=image_set,
                           image_name=image_name)


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True
    )
