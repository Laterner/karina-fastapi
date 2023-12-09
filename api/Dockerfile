FROM python:3.11.1-slim as build

# set work directory
WORKDIR /app 

# set env variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
# COPY requirements.txt .
RUN pip install anyio==3.7.1
RUN pip install fastapi==0.99.1
RUN pip install psycopg2-binary
RUN pip install uvicorn==0.22.0


# copy project
COPY ./src /app
