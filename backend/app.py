from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from PIL import Image
import json
import shutil

from model import MyModel

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

from image_processing import extract_green_channel


app = Flask(__name__)

CORS(app)


@app.route('/')
def hello():
    return '<h1>Hello, World!</h1>'


@app.route("/predict", methods=["POST"])
def predict():
    try:
        if "image" not in request.files:
            return jsonify({"error": "No file part"})

        file = request.files["image"]

        if file.filename == "":
            return jsonify({"error": "No selected file"})

        if file:
            # request.form['folderName'] = "dev"
            
            FOLDER_PATIENT = './uploads/' + "dev"
            # Check if the folder exists
            if os.path.exists(FOLDER_PATIENT):
                # If it exists, delete it and its contents
                shutil.rmtree(FOLDER_PATIENT)


            os.makedirs(FOLDER_PATIENT, exist_ok=True)

            file_path = os.path.join(FOLDER_PATIENT, file.filename)
            file.save(file_path)
            labels = {0:"Healthy", 1:"Stage 1", 2:"Stage 2"};
            # try:
            #     img = Image.open(file_path)
            # except Exception as e:
            #     return jsonify({"error": "Failed to open the image file"})

            if True:
                try:
                    obj = MyModel()
                    prediction,probality = obj.getLearn(FOLDER_PATIENT)
                    str_p= ""
                    probsR = {}
                    
                    str_p = ','.join([f'{t[1]:.8f}' for t in sorted(probality, key=lambda x: int(x[0]))])
                    

                    # probs_list = [f"{str(prob*100)}" for label, prob in probality]

                    # # # Join the list with commas to create a comma-separated string
                    # str_p = ', '.join(probs_list)

                    # for label, prob in probality:
                    #     # str_p = str_p + str(labels[int(label)]) + " 's Probability is " + str(int(prob*100)) +  "%,"
                    #     p = str(int(prob*100))
                    #     probsR = probsR.append(p)
                    
                    # str_p = probsR.join(',')
                    print(str_p)
                    return json.dumps({"class": labels[prediction], "confidence": str_p})
                except Exception as e:
                    print(e)
                    return jsonify({"error": "Failed to process the image"})
            else:
                return jsonify({"error": "Failed to process the image"})
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)})



if __name__ == "__main__":
    app.run(host='0.0.0.0', debug = False)
