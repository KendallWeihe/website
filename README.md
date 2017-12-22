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
  - stand up new instance for this
  - make branch for this
  - ...

  - I have a certificate for kendallweihe.me approved by aws
    - ...I think this means that any self signed cert with fqdn as
        kendallweihe.me is secure ...?
  - I also think ELB is already secure
    - ...so let's setup an https server attached to an ELB

  - regarding https on my website:
    - rename new instance and use it
    - use same load balancer
    - route route 53 to load balancer
    - merge https branch to master
    - tmux stuff...
    - wait...


# container stuff
  - make new repo for this
  - docker compose (for now)?
  - reverse proxy container
  - test server container
    - multi container networking?






...
