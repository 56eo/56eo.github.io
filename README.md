56eo
=================


## Local development using Docker

1. Make sure you have [Docker](https://www.docker.com/) installed.

2. Clone your repository locally.

    ```bash
    git clone https://github.com/<your_username>/<your_username>.github.io.git
    ```

3. Run the following shell commands to build the docker image and start the container for the first time:

    ```bash
    cd <repository_folder>
    docker build -t 56eo "$PWD"
    docker run -d -p 4000:4000 --name 56eo -v "$PWD":/srv/jekyll 56eo
    ```


Now that Docker is set up, you do not need to run the above steps again. You can now view your website at http://localhost:4000/. You can start the container again in the future with:

```bash
docker start 56eo
```

And you can stop the server with:

```bash
docker stop 56eo
```

Whenever you make any change in the project you should restart the image 
and refresh web page http://localhost:4000/
```bash
sudo docker restart 56eo
```
