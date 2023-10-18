from fastai import *
from fastai.vision import *
from fastai.vision.all import *

from fastai.metrics import *
from fastai.test_utils import *

from fastai.callback import *
from fastai.callback.all import *
from fastai.callback.schedule import *
from fastai.callback.tracker import *
from fastai.callback.progress import *
from fastai.callback.tracker import ShowGraphCallback
from fastai.metrics import accuracy

import pandas as pd
import matplotlib.pyplot as plt

import os
import pandas as pd
from PIL import Image
import numpy as np
from sklearn.metrics import accuracy_score

from image_processing import extract_green_channel

def weighted_loss_func(inputs, targets, reduction='mean'):
        # Use class_weights to calculate weighted loss with the specified reduction
        return CrossEntropyLossFlat(weight=torch.Tensor(class_weights), reduction=reduction)(inputs, targets)

    # Define the data loading pipeline


class MyModel:
    def getLearn(self,folderName):
        # Define class weights based on the calculation
            class_weights = [0.74, 1.22, 1.20]

            # Update the data loading pipeline to include the green channel extraction
            fields = DataBlock(
                blocks=(ImageBlock, CategoryBlock),
                get_items=get_image_files,
                get_y=parent_label,
                splitter=RandomSplitter(valid_pct=0.20, seed=42),
                item_tfms=[Resize(299), extract_green_channel],  # Add the green channel extraction here
                batch_tfms=aug_transforms(
                    max_warp=0.2, max_zoom=1.1, max_lighting=0.2, p_lighting=0.5, max_rotate=45
                ),
            )

            dls= fields.dataloaders("Train", bs=4)


            learn = vision_learner(dls, densenet121, metrics=accuracy, loss_func=weighted_loss_func, pretrained=True, opt_func=SGD, cbs=[ShowGraphCallback()])  

            model = nn.Sequential(learn.model, nn.Dropout(0.65))

            # # Define the path to the test set
            test_dir = folderName

            # Get the list of image files in the test directory
            test_image_files = get_image_files(test_dir)

            # Print the number of images in the test directory
            num_images = len(test_image_files)
            print(f"Number of images in the test directory: {num_images}")

            # Load the saved model
            learn = load_learner('model')
            # # Create a DataLoader for the test set
            test_dl = learn.dls.test_dl(test_image_files, with_labels=False)
#
            # Make predictions on the test set
            preds, targets = learn.get_preds(dl=test_dl)

            probs = preds[0].numpy()

            predicted_labels = preds.argmax(dim=1).numpy()

            # #print(predicted_labels)

            class_names = dls.vocab

            # # Create a list of (class, probability) pairs
            label_probs = [(class_names[i], prob) for i, prob in enumerate(probs)]

            # # Sort the list by probability in descending order
            label_probs.sort(key=lambda x: x[1], reverse=True)

            # Print the sorted list of labels and their probabilities
            #for label, prob in label_probs:
            #    print(f"{label}: {prob:.4f}")

            print(predicted_labels,label_probs)

            return predicted_labels[0],label_probs
            # return learn