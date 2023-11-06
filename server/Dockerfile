FROM golang:1.21.1-bullseye

ENV TZ=Asia/Tokyo
ENV WORKDIR=/app
WORKDIR ${WORKDIR}

RUN apt update \
  && rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man \
  && apt clean

COPY . .

EXPOSE 50051

CMD ["/bin/bash", "./entry_point.sh"]

ENV HOME=${WORKDIR}

RUN go install
RUN go build -buildvcs=false

ENV HOME=/root
