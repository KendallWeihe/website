
# Primary tools used:
  - NodeJS & Express
  - HTML
  - JavaScript
  - CSS
  - AWS
    - hosting
    - load balancing
    - DNS resolution
  - tmux

# Setup:
  - `git clone ...`
  - `npm install`
  - TLS things:
    - generate key: `openssl genrsa -out <name>.key 2048`
    - generate cert: `openssl req -new -x509 -key <name>.key -out <name>.cert -days 3650 -subj /CN=<name>`

# Start server:
  - `sudo KEY=<path>/<name>.key CERT=<path>/<name>.cert node server.js`

# TODO:
  - write different versions of dialog
  - add portfolio page
    - four sections
      - 3 for highlighted projects
      - 1 for miscellaneous crap
  - logo icon (fixed top left)
    - links to a more personal About Me page
  - portfolio icon (fixed top right)
  - throw all this in a Docker container (w/ hopes to orchestrate multiple sites in future)
  - CloudFormation script
  - add a job that will backup log files w/ scp
  - auto style for PHONE landscape
  - build automation
