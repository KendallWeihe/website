# README

# EC2:
  - each site runs in a container
  - reverse proxy
  - each site uses https on port 443
  - https is forced
  - kubernetes to manage containers

  - "how to host a https site"
    - http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/https-singleinstance-nodejs.html
    - what are the openssl steps I need to take?
      - change ec2 hostname

# HTTPS:
  - put my site in a docker
  - map port 3001
  - add https support in node code
  - load balancer listener
    - https only
    - map to port 3001... hmm application load balancer does not support





...
