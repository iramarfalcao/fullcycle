FROM golang:alpine3.17 as builder
WORKDIR /app
COPY ./main.go ./
RUN go build main.go
ENTRYPOINT [ "./main" ]

FROM scratch
WORKDIR /app
COPY --from=builder /app .
ENTRYPOINT [ "./main" ]
