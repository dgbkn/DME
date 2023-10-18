from PIL import Image
import numpy as np


def extract_green_channel(im):
        try:
            # Convert the PIL image to a NumPy array
            im_array = np.array(im)

            if im_array.ndim == 3:
                # Extract the green channel (channel 1)
                green_channel = im_array[:, :, 1]

                # Convert the NumPy array back to a PIL image
                green_image = Image.fromarray(green_channel)

                return green_image
            else:
                # Handle the case where the image doesn't have three dimensions (e.g., grayscale)
                return im
        except Exception as e:
            # Handle any exceptions that might occur during processing
            print(f"Error extracting green channel: {e}")
            return im