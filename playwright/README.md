# Playwright Proxy Examples

This folder contains beginner-friendly Playwright examples for using proxies in automation, testing, and scraping workflows.

## Examples

### 1. basic_proxy_setup.js
Launches Chromium with a proxy server and opens a test URL to verify the proxy IP.

## Replace these values

```txt
PROXY_HOST
PORT
USERNAME
PASSWORD
```

## Run the example

Install Playwright first:

```
npm install playwright
```

Then run:

```
node basic_proxy_setup.js
```

## Notes
- Never commit real proxy credentials.
- Use timeouts and error handling for production workflows.
- Respect website terms of service.
