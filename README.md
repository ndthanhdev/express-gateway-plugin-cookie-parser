# express-gateway-plugin-cookie-parser
![](https://img.shields.io/npm/v/express-gateway-plugin-cookie-parser)
Add express cookie-parser middleware to express-gateway

# Usage
```yaml
# system.config.yml
plugins:
    express-gateway-plugin-cookie-parser:
        package: 'express-gateway-plugin-cookie-parser'
```  

```yaml
# gateway.config.yml
pipelines:
  api:
    policies:
      - proxy:
        - condition:
            name: expression
            expression: "req.cookies.username === 'admin'"
```

## With advanced configuration:

```yaml
# system.config.yml
plugins:
    express-gateway-plugin-cookie-parser:
        package: 'express-gateway-plugin-cookie-parser'
        secret: 'my-secret'
        option:
          - desc: 'An object that is passed to cookie.parse as the second option.'
          - desc2: 'See https://www.npmjs.com/package/cookie for more information.'
```
