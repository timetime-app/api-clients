#!/usr/bin/env bash

docker run --rm \
  -v "${PWD}":/local \
  openapitools/openapi-generator-cli:v7.0.0 generate \
    -i /local/spec.json \
    -g typescript \
    -o /local/typescript
