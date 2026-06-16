FROM python:3.12
WORKDIR /app
copy entrypoint.py .
# notice the next line help us to not avoid any enviromental variables at every run of the  entrypoint.py

ENTRYPOINT ["python",'entrypoint.py']