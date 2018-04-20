
# Architecture:
- S3 hosting
- CloudFront CDN
- Route53 DNS

## S3
- properties: *host static website*

## CloudFront
- origin domain: s3 bucket
- origin path: index.html
- redirect http to https
- custom SSL cert
- CNAME: www.kendallweihe.me

## Route53
- keep default NS & SOA 
- type A
  - blank Name
  - alias: CloudFront distribution

# Deployment:
- TODO: look into deployment tool
  - upon merge w/ Master deploy site to S3 bucket

