FROM python:3.9


# Install system dependencies
USER root
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    unzip \
    wget \
    && rm -rf /var/lib/apt/lists/*

RUN useradd -m -u 1000 user
USER user
ENV PATH="/home/user/.local/bin:$PATH"

WORKDIR /app

COPY --chown=user ./requirements.txt requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Download and unzip the zip file from Dropbox
RUN wget "https://dl.dropboxusercontent.com/scl/fi/lidf2357xny5v7eb6f9ly/Train.zip?rlkey=2gj8n9qy6hpu2okklkni91j2y&st=molowtgi&dl=0" -O Train.zip \
    && unzip Train.zip -d /app/train_data \
    && rm Train.zip

RUN wget "https://dl.dropboxusercontent.com/scl/fi/30gqqx9cugolzq4f53jc9/model?rlkey=4b94figx1nromgtxzsu9c48h1&st=cb7omzbk&dl=0" -O model
RUN wget "https://dl.dropboxusercontent.com/scl/fi/41552ksajxikjzhwmlllu/model.pth?rlkey=9fsp2covwl3mzrojgbmt8xw46&st=eios7xfr&dl=0" -O model.pth
COPY --chown=user . /app

# CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "7860"]
CMD ["python", "app.py"]